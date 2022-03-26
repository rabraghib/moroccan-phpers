---
name: PHP Code tester
icon: test-tube
summary: Design the architecture of the code testing part of a challenges platform
date: "2020-01-01"
duration: 1 to 2 hours
---

## Infrastructure design

As part of the interview process, the company **Acme** challenges their applicants by solving some code challenges. So far
each applicant receives the code challenge per email, solves it and sends back his solution per email in `.zip` format.
The recruiting team runs firstly some test commands on the solution to make sure it's working before investigating time.

The company wants to improve this process, as they can not for example track when each applicant started and finished the challenge.
So they have decided to build their own platform, where the applicant can write his solution and after hitting the submit button, a series of test commands
should run automatically without the intervention of any person of the recruiting process.

The frontend part is already implemented by the frontend developers.
Your task as software engineer, is to design the architecture for the whole backend without implementing it.

## Things to consider

- Each code challenge has its own test classes.
- The same code challenge can be solved by many applicants at the same time.
- For the first step, they want to allow only challenges in `PHP`.
- Applicants can not submit their solution as guests. They must be logged in (email, password).
- Security
