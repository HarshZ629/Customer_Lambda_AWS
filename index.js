

const axios = require('axios');

exports.handler = async (event) = {
   Parse the input data received from the API Gateway
  const customerData = JSON.parse(event.body);

   Fetch sample customer data from an external API
  const response = await axios.get('httpsjsonplaceholder.typicode.comusers');
  const sampleCustomers = response.data;

   Find a matching customer based on the provided email
  const matchedCustomer = sampleCustomers.find((customer) = {
    return customer.email === customerData.email;
  });

   Perform validation checks
  let verificationResults = {
    email false,
    phone false,
    name false
  };

  if (matchedCustomer) {
     Email verification
    if (matchedCustomer.email === customerData.email) {
      verificationResults.email = true;
    }

     Phone validation (assuming a valid phone number is provided)
    if (matchedCustomer.phone === customerData.phone) {
      verificationResults.phone = true;
    }

     Name matching
    if (matchedCustomer.name === customerData.name) {
      verificationResults.name = true;
    }
  }

   Return the verificationvalidation results as the API response
  const responsePayload = {
    verificationResults verificationResults
  };

  return {
    statusCode 200,
    body JSON.stringify(responsePayload)
  };
};
};