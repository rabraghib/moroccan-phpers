---
date: "2022-03-01"
duration: 5 to 10 hours
---

## Introduction

We are a small agency that rents accommodations for our customers. The vast majority of those accommodations belong to partners like hotels and other agencies. Sometimes also individuals.

As for now, we get the list of available rooms from each partner on a daily basis via emails. The lists can be excel, json or xml files. It's very often that the files contain incomplete information about some accommodations. It's then the job of our editors team to process, filter those files manually and make sure we have at the end a clean list. The final list is usually an excel file, which we then promote to our clients.

Since our business is growing and so are our partners, we reached the point where we must have an automated solution.

## Your task

To create a microservice that can process those files every day, filter them out and store the available accommodations in a normalized way in a database, which can be later linked with our website.

**This microservice doesn't have to provide any endpoint.**

All the files will be uploaded manually on the server's disk and will have this format. “partner-name\_\_yy-mm-dddd.extension”.

Examples:

- arbenbe\_\_28-02-2022.json
- arbenbe\_\_01-03-2022.json
- abc-travel\_\_28-02-2022.xml
- abc-travel\_\_01-03-2022.xml

**You can found some samples for development at: https://github.com/moroccan-phpers/accommodations-list-samples.**

One very important requirement is that we want to be able to enable or/and disable partners on a daily basis, whose files we want to process. For example today we want to skip “arbenbe” files, but we may want to process them tomorrow.

The illustration below explains what the architecture would look like.

![Architecture Diagram](https://user-images.githubusercontent.com/49442862/159347219-5075c7f7-24f2-4abc-b3bf-176db8c49661.png)

## The database

The choice of which database to use and how to store accommodations is up to you. The only constraint we have is that each accommodation must have:

- Name (string)
- Address:
  - Street (string)
  - House number (string)
  - Zip (string)
  - City (string)
  - Country (string)
- Available From and available until (date)
- Price per night (Double with 2 digits precision. Ex: 145.99)
- Amenities:
  - Wifi.
  - Breakfast included.
  - Pets allowed.
  - Air conditioner provided.

**Please, explain in the Readme file your choice of the database.**

## What you need to know

1. An accommodation is only valid, if it has those information:
   - Availability dates.
   - Price per night.
   - Address.
   - Name.
2. The files to process today were uploaded yesterday at 22pm.
3. We always keep a copy of each file stored locally.
4. **Our database provider bills us 0.00001 dollar ($) for each insert query.**
5. We are in negotiations to have other partners in the near future. Make sure it's easy to extend the microservice to add other partners.
6. We would like to have a daily report of each file processing. Like how many accommodations were valid? How many were not?

## Bonus task

As we mentioned before, the files to be processed are uploaded to the same server, where the microservice is running. But we may want to upload the files of some specific partners (especially the largest ones) later to a cloud storage instead. (Example: Amazon buckets or/and Google cloud buckets).

So it would be nice if your solution can handle both situations. You don't have to implement the business logic for loading a file from the cloud storage for now.
