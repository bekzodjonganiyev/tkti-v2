const globalUrl = "http://backend.tkti.uz";

class Http {
  async addData(endpoint, body, isFormData) {
    let headers = isFormData
      ? {
          Token: localStorage.getItem("token"),
        }
      : {
          "Content-type": "application/json",
          Token: localStorage.getItem("token"),
        };
    try {
      const res = (
        await fetch(`${globalUrl}/${endpoint}`, {
          method: "POST",
          headers,
          body,
        })
      ).json();
      return res;
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  async getData(endpoint, shouldToken) {
    try {
      const res = await fetch(`${globalUrl}/${endpoint}`, {
        headers: shouldToken
          ? {
              "Content-type": "application/json",
              Token: localStorage.getItem("token"),
            }
          : { "Content-type": "application/json" },
      });

      return res.json();
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  async deleteData(endpoint, id) {
    try {
      const res = (
        await fetch(`${globalUrl}/${endpoint}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Token: localStorage.getItem("token"),
          },
        })
      ).json();
      return res;
    } catch (err) {
      const e = { message: err.message, error: true, success: false };
      return e;
    }
  }

  async editData(endpoint, id) {
    try {
      const res = (
        await fetch(`${globalUrl}/${endpoint}/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Token: localStorage.getItem("token"),
          },
        })
      ).json();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

const Fetchers = new Http();
module.exports = { Fetchers };
