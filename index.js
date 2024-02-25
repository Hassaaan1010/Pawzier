import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import morgan from "morgan";

const app = express();
const port = 3000;

//
`API Key : WQnOzuhJ1TTWs4B9M0aR4aAZFLTZ9xHTzeZjkHxHJHG5dp3xrE
Secret : YNkgPote26nacLeRGPI3TaoxYb3Ua4kUSzdqYYcL
"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJXUW5PenVoSjFUVFdzNEI5TTBhUjRhQVpGTFRaOXhIVHplWmprSHhISkhHNWRwM3hyRSIsImp0aSI6IjI0OTg4MDdhYmY1ZDQxNDNmZGNiYmNmMzAwZGIwNWMwYTM3ZGVkNTYxMDVjZjg1NzNkZDI5N2Y5NDQ1NjZkOTc2MzE0MGNkMWZlMzg3NjA4IiwiaWF0IjoxNzA4ODcyNzk2LCJuYmYiOjE3MDg4NzI3OTYsImV4cCI6MTcwODg3NjM5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.GfF1K6BF6ov516prbVhOnDBHx-D_DmlgloQ5d4C2K2Pzc0Jy66gS4Dcomj6XA4_mta5DNFwAFLA-T9kxlTlD5JI-jXK8lA9Y5cVD_nFnNLy6WjVZRiM2N1cpylvgOT3p-_BbX3Idnp3hwFFgusQvUkXKLiNTr1DUVWCV9VMRKw3EjLVl93ikhy0bdPqHM_ljJtgSmi93J0gtOyotmGK-EapK_r7XFcXf_YNxJXQTyj6-St42OE9_cTnm-k1LLTu7xsvRXnbKAXxGGoTD136Sz6LsWY4_ZGn7GRU_YtFL7NZLDzlWFyy8oI9V2bfLvoBR9424l0oBuwOkVHVjLdpV3w"
`;

// Middleware
morgan.token("customDate", () => {
  const currentDate = new Date().toISOString();
  return currentDate;
});
app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :customDate"
  )
);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Started running port at`, port);
});
