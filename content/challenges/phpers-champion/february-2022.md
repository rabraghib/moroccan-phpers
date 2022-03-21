---
date: "2022-02-01"
duration: 5 to 10 hours
---

## Introduction

In our company, we send thousands of emails on a daily basis from dozens of internal services. In the current situation, we have a **mail delivery service\*** integrated in all our internal services from where we send the emails.

The problem with this architecture is that it became very hard to keep track of the sending process of emails across all the internal services. Moreover, almost all the implementations (like the handling of failed sendings, tracking events) are duplicated in those services. So when the **mail delivery service** introduces a change in their api, we have to do the change multiple times, which is not just annoying but it costs our engineers a lot of time and effort.

So to provide a better solution, we thought about centralizing the sending of all the emails in a single microservice. Only this microservice will be directly connected with the **mail delivery service** and all the other internal services can send the emails only through it.

The illustration below explains the architecture we want to achieve.

![Architecture Diagram](https://user-images.githubusercontent.com/49442862/159344421-9f9b8dc6-f103-44a7-afe3-56282f9933f8.png)

## The Mail Delivery Service

The **mail delivery service** is a paid service (3rd party library) that is responsible for delivering an email to its recipient. Like postmark and mailgun.

It provides an endpoint which is `POST /api/emails` to synchronously submit emails for delivery. The delivery process can take some time and when it's done, the **mail delivery service** can report about the status of the delivery via a webhook.

The `/api/emails` is designed to accept a payload as json and looks like this:

```json
{
  "request_id": "an id for your request.",
  "sender": "the email address of the sender",
  "recipient": "the email address of the receiver",
  "message": "email body as HTML format."
}
```

and it responds with

```json
{
  "STATUS": "ACCEPTED" | "ERROR"
}
```

And the right HTTP status code. (200 or 500).

In the Webhook call, the **mail delivery service** contains this information in the body.

```json
{
  "ID": "The id we sent in the first request",
  "STATUS": "DELIVERED" | "REJECTED" | "FAILED"
}
```

## Your task

Your task is to implement the new microservice as illustrated above. The microservice must provide an API with 2 endpoints.

- `/send` : it accepts requests to send the emails and forward them to the **mail delivery service** for delivery. Every request must provide this payload as json:
  ```json
  {
    "sender": "the email address of the sender.",
    "recipient": "the email address of the receiver.",
    "message": "email body as HTML format."
  }
  ```
  This endpoint must respond with a status and a generated request id to the consumer, that he can use for tracking the status of the request later. The response should look like this:
  ```json
  {
    "status": "accepted",
    "request_id": "059298eb-31ca-48f9-a022-6702058d67e8"
  }
  ```
  or in case the request is invalid.
  ```json
  {
    "status": "denied",
    "reason": "missing recipients field"
  }
  ```
- `/status` : this endpoint returns the status of a request by providing the request id generated in the first endpoint. The response has to look like this.
  ```json
  {
    "request_id": "059298eb-31ca-48f9-a022-6702058d67e8",
    "status": "sent" | "failed" | "processing"
  }
  ```

**From our experience with the mail service delivery, it is very usual that their server goes down and therefore some emails never get submitted for delivery. So make sure the new microservice handles this situation.**

## Bonus task

Some emails (e.g security alerts and One Time Passwords) must be sent as fast as possible. So it would be a bonus if your solution would support prioritizing the sending of emails.
