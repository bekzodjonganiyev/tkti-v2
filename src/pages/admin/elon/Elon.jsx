import React, { useContext, useEffect } from "react";

import FormHeader from "../../../components/admin/form_header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";
import { Context } from "../../../context";

const Elon = () => {
  const {globalUrl} = useContext(Context) 
  const props = {
    inputNames: {
      nameUz: "Yangilik nomi Uz",
      nameRu: "Yangilik nomi Ru",
      nameEn: "Yangilik nomi En",
    },
    textEditorNames1: {
      nameUz: "maqsad va vazifa Uz",
      nameRu: "maqsad va vazifa Ru",
      nameEn: "maqsad va vazifa En",
    },
    buttonName: "Saqlash",
    url: "elon/add",
  };

  function postData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body_uz", convertToHtml(asosiyVazifaUz));
    formData.append("body_ru", convertToHtml(asosiyVazifaRu));
    formData.append("body_en", convertToHtml(asosiyVazifaEn));
    formData.append("title_uz", names?.nameUz);
    formData.append("title_ru", names?.nameRu);
    formData.append("title_en", names?.nameEn);
    for (let i = 0; i < imgRef.current.files.length; i++) {
      formData.append("photo", imgRef.current.files[i]);
    }

    fetch(`${globalUrl}/elon/add`, {
      method: "POST",
      headers: {
        Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E5OWI5YzUwNjBlZDlhMGRkODg0OCIsImlhdCI6MTY3NDQ1MDIxNywiZXhwIjoxNjc0NTM2NjE3fQ.8HtdsogxLAWUzLjYtCK-rqQBIw98LJX5wZkhQ7KaJgg"
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    postData()
  }


  return (
    <div>
      <FormHeader title="Elon" buttonName="+" />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam, quibusdam doloremque perferendis tenetur neque eum cumque necessitatibus, beatae soluta eveniet, nam similique dolore accusamus adipisci. Tempora distinctio, esse voluptas, excepturi quae sequi, suscipit modi obcaecati culpa quas totam. Quos aspernatur odio, ab enim optio accusamus blanditiis harum neque eveniet eum laborum nulla iusto amet rerum quam voluptates incidunt, aliquam quia. Doloribus exercitationem porro impedit hic pariatur magnam facere autem distinctio commodi est deleniti dicta nulla ullam, dignissimos voluptatibus atque reiciendis. Nesciunt numquam libero dolore. Quas accusantium, reprehenderit ad perspiciatis quae, quos magni enim pariatur voluptatibus sit dolor. Voluptatum aspernatur minus ab nam doloremque numquam aliquid adipisci eveniet voluptates et distinctio dolorum atque, rerum totam qui saepe. Rerum quo maxime neque officiis odio repellat molestiae exercitationem nam eligendi ex modi non velit eos esse facilis quasi, et libero! Quaerat veritatis id, perferendis corporis, repellendus molestiae repudiandae, ea maxime aliquam iste dolorem. Excepturi porro non praesentium iure doloribus ut est odit molestiae perspiciatis incidunt eius animi amet culpa, nobis asperiores saepe magni corrupti eos aspernatur sed fugit? Quas praesentium, aut nostrum ad aperiam ea reiciendis nulla sequi fugiat, mollitia, aliquam obcaecati voluptatem itaque facilis sed quae eveniet omnis! Nisi, nemo. Omnis illo ipsam, quidem id praesentium nihil facilis ut odio, ad repudiandae doloribus unde saepe reprehenderit quam fugit. Ullam, saepe! Numquam nesciunt deserunt ex illo nulla labore consequatur quo consectetur officiis natus commodi dolores deleniti quia quis rerum aspernatur esse eos, nobis eveniet dicta eaque neque! Quos voluptates odit animi vitae voluptatibus dignissimos esse dolorem distinctio minus voluptate voluptatum dolores, illum repudiandae inventore dolore quo labore qui error ea unde autem aut eum consequuntur facere! Quod blanditiis earum minima nobis! Molestias dolor, quisquam dicta odit magnam veniam iusto rerum saepe, alias distinctio aliquam enim sit, assumenda repellendus accusamus eos quaerat nisi?
      <h1>FormData bilan ishlashda muammo bolyapti</h1>
    </div>
  );
};

export default Elon;
