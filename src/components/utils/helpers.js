import axios from 'axios'
// import React from 'react'

const authKey = "b3b4ba7816ee49c9aeebb09ed6c1ed02";

const helpers = {
  searchArticle(topic) {
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + topic
    
    return axios.get(queryURL).then(function (results) {
      if (results.data.response.docs.length === 0) {
        console.log("No records");
      } else {
        let NYTRecords = results.data.response;
        let NYTResultArray = [];
        for (let i = 0; i < NYTRecords.docs.length; i++) {
          if (NYTRecords.docs[i].headline.main) {
            let NYTResultObject = {};
            NYTResultObject.title = NYTRecords.docs[i].headline.main;
            
            if (NYTRecords.docs[i].pub_date) {
              NYTResultObject.publish_date = NYTRecords.docs[i].pub_date;
            }
            if (NYTRecords.docs[i].web_url) {
              NYTResultObject.link = NYTRecords.docs[i].web_url;
            }
            NYTResultArray.push(NYTResultObject);
          }
        }
        return NYTResultArray;
      }
    });
  },
  saveArticle(title, date, url) {
     let newArticle = {
      title,
      date,
      url
    };
    return axios.post("/save-article", newArticle);
  },
  getSavedArticle () {
    return axios.get("/saved-articles");
  },
  deleteArticle (articleID) {
    return axios.delete("/delete-article", {
      params: {
        'id': articleID
      }
    });
  }
}


export default helpers