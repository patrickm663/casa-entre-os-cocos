# Casa Entre os Cocos
This site serves as a landing page for my parents' guest house **Casa Entre os Cocos** in Mozambique, which I offered to take on as a project by helping to build, manage, and host the site. The design is based on the W3 Schools ['Apartment Rental'](https://www.w3schools.com/w3css/tryw3css_templates_apartment_rental.htm) template.

Some Javascript has been added thus far to:
1. Set minimum dates for check-in and check-out which change dynamically based on the current date
2. Include a map showing the location of the guest house, using Leaflet and https://www.openstreetmap.org
3. Take in form data, clense it, and send it via an API to a Lambda function in order to send out an email to the business 

The site is hosted through AWS CloudFront using an S3 bucket. The domain and SSL certifications are managed by Route 53. Contact form requests are handled through API Gateway into a Lambda function (NodeJs) which uses SES to communicate to the business's email address.

## TODO
Lots to still get done, but namely:
- [x] Source more icons for 'annemities' and 'activities' on the page as Font Awesome does not seem to cover everything
- [x] Link contact forms for Lambda functions which send emails to the host email address (similar process as I do currently over at https://patrickmoehrke.com)
- [ ] General tidy-up and prettifying pictures
- [ ] Create a backend database to manage bookings
- [ ] Continue to edit and tweak the site to not be as reliant on the starting template :) 

## License
Licensed under [MIT](https://github.com/patrickm663/casa-entre-os-cocos/blob/main/LICENSE).
