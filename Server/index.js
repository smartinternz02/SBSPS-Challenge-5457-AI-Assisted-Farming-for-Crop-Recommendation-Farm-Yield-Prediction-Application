const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Server is running  at port ", port);
});

app.get("/status", (req, res) => {
  res.send("Active");
});

app.post("/cors", cors(), (req, res) => {
  console.log(req.body);
  const API_KEY = "B1mo3gmGszh2wXROK6WnFupr8N8bSqXpkm1nJoVhMR_5";
  const data = {
    apikey: API_KEY,
    grant_type: "urn:ibm:params:oauth:grant-type:apikey",
  };
  const form = new URLSearchParams();
  form.append("apikey", API_KEY);
  form.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data: form,
    url: "https://iam.cloud.ibm.com/identity/token",
  };
  // axios
  //   .post("https://iam.cloud.ibm.com/identity/token", , {
  //   })
  axios(options)
    .then((responseIAM) => {
      console.log("Successfully fetched the IAM Token");
      const IAM_Token = responseIAM.data.access_token;
      console.log(IAM_Token);
      axios
        .post(
          "https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/f733baca-6c11-4531-9c05-2d980ee19844/predictions?version=2021-08-20",
          req.body,
          {
            headers: {
              Authorization: "Bearer " + IAM_Token,
            },
          }
        )
        .then((result) => {
          const pred = result.data.predictions[0].values[0];
          console.log(pred);
          res.send(pred);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
});
