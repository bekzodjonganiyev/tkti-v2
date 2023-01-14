import React, { useState } from "react";
import FormHeader from "../../../components/admin/form _header/FormHeader";
import AddForm from "../../../components/admin/add_form/AddForm";

import "./Fakultet.css";

const Fakultet = () => {
  const [inputNames, setInputNams] = useState({
    nameUz: "nameUz",
    nameRu: "nameRu",
    nameEn: "nameEn",
  });
  const [textEditorNames1, setTextEditorNames1] = useState({
    nameUz: "nameUz",
    nameRu: "nameRu",
    nameEn: "nameEn",
  });
  const [textEditorNames2, setTextEditorNames2] = useState({
    nameUz: "nameUz",
    nameRu: "nameRu",
    nameEn: "nameEn",
  });
  const [selectName, setSelectName] = useState("name");
  const [buttonName, setButtonName] = useState("name");
  return (
    <div>
      <FormHeader title="Fakultet" buttonName="+" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, totam doloribus animi ex magnam voluptate, maxime reprehenderit est consectetur saepe quas maiores ipsum aperiam, aliquam eius praesentium nemo itaque laborum exercitationem quae nesciunt! Ab facere, explicabo minus recusandae, eaque excepturi, aut doloremque placeat ad delectus enim eius qui quasi quas! Eligendi repellat quasi officiis necessitatibus similique. Itaque labore nemo ut assumenda laborum nesciunt asperiores ipsam! Nihil aut temporibus inventore similique enim quis, tempora molestiae repellendus explicabo facilis totam asperiores veniam rerum deserunt cumque ipsa saepe debitis quisquam natus exercitationem dolore nostrum beatae. Eveniet, ducimus illo nisi facere architecto distinctio, magni dolorem officia quia maxime quaerat, exercitationem tempore excepturi blanditiis amet. Consectetur maiores eaque beatae ipsam magni corrupti optio nemo voluptas? Distinctio maiores quae modi quam neque temporibus optio vero recusandae nesciunt blanditiis, quas quod sint alias dolore laborum fugiat. Sint eius earum, voluptates incidunt vitae saepe. Vitae corporis veniam consequatur, laudantium necessitatibus quos blanditiis sed minus! Consectetur tenetur, error id ullam quae vitae fugit dolores dolore quibusdam officiis at dolorum atque omnis, qui labore cumque? Deserunt accusantium fugit natus impedit tempora neque voluptatem beatae nostrum, qui ad error. Architecto maxime quasi veritatis dicta explicabo cum sapiente magnam optio! Est vel modi distinctio neque eveniet? Inventore, provident aut perspiciatis modi earum soluta, rerum alias magni tenetur nesciunt labore pariatur officiis ducimus amet cum ullam error obcaecati. Quisquam odio a numquam necessitatibus dicta molestias nostrum, suscipit repellendus asperiores laudantium dolorem incidunt est aliquid, animi totam reprehenderit dolore eveniet saepe facilis, omnis magnam accusamus hic! Fugiat error nulla tempore minima quaerat explicabo nostrum, placeat hic quas voluptates illum doloribus corrupti molestias, suscipit ea quae libero dolorum! Animi debitis perspiciatis qui eaque voluptatem omnis doloribus modi soluta, nam temporibus magnam quasi autem odit. Dicta delectus veritatis eveniet ut nam atque rerum, magni voluptatum, numquam, quidem doloribus voluptatem at similique corporis nemo. Odit temporibus sapiente autem animi iusto enim corrupti harum veritatis nobis? Eos recusandae reiciendis maxime aut. Deleniti, obcaecati. At, rem quos, voluptatibus inventore eum harum perferendis ullam modi distinctio, quod eos ab ipsam? Voluptatum rerum nisi ut eligendi quisquam repudiandae sint dolores est aut quo expedita, necessitatibus unde nobis laboriosam minima, enim ea veniam natus voluptates labore? Expedita, sunt nulla. Et fugiat corrupti nesciunt, ab odio tenetur error laborum distinctio molestiae asperiores totam cum odit magnam culpa eos hic! Dolor praesentium tempore eum odio libero porro odit? Facilis totam quae odio quis optio ratione, soluta, voluptatibus nostrum commodi deserunt aspernatur reiciendis veritatis neque voluptate quisquam sed expedita, nulla at a voluptatum? Incidunt et delectus consectetur molestias, nemo unde inventore error voluptate alias rerum in praesentium saepe eos odio sed eveniet deleniti sequi perferendis quaerat earum ipsum magnam suscipit. Aut beatae nisi eaque rerum possimus cum voluptate ad atque nobis necessitatibus. Voluptatem veniam, distinctio ut tempora qui repudiandae saepe eius. Iusto eius illum libero assumenda exercitationem et aliquam voluptatum veniam, ea facilis sequi esse ratione possimus alias eos sint aliquid dolores eum quod repellendus. Sint dolor nobis delectus mollitia porro commodi ex inventore. Ipsam.
    </div>
  );
};

export default Fakultet;
