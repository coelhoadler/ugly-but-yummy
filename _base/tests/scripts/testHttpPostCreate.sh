curl --location --request POST 'http://localhost:8080/create' \
--header 'Content-Type: application/json' \
--data-raw '{
  "externalId": 999928271724,
  "orderId": "5ce2b5b3-4290-43b4-b86d-40769cf0de49",
  "weatherEvent": 4,
  "weatherEventDate": "2020-12-31",
  "notificationUrl": "http://localhost:8080/notify"
}'