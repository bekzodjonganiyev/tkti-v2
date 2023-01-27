import { useContext } from "react";

import Context from "../context/index";

const { globalUrl } = useContext(Context);

class Http {
  async addData(endpoint, body) {
    try {
      const res = (
        await fetch(`${globalUrl}/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Token: localStorage.getItem("token"),
          },
          body: JSON.stringify(body),
        })
      ).json();
      return res;

    } catch (error) {
      console.log(error);
    }
  }

  async addDataWithFormData(endpoint, formData) {
    try {
      const res = (
        await fetch(`${globalUrl}/${endpoint}`, {
          method: "POST",
          headers: {
            Token: localStorage.getItem("token"),
          },
          body: formData,
        })
      ).json();
      return res;

    } catch (error) {
      console.log(error);
    }
  }

  async getData(endpoint) {
    try {
      const res = (await fetch(`${globalUrl}/${endpoint}`)).json();
      return res;
    } catch (error) {
      console.log(error);
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

    } catch (error) {
      console.log(error);
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
      console.log(error)
    }
  }
}
