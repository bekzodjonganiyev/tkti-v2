import React from "react";
import FormHeader from "../../../components/admin/form_header/FormHeader";
import XodimForm from "../../../components/admin/xodim_form/XodimForm";

const Bolim = () => {
  const props = {
    nameLb:{
      uz:"xodim ismi uz",
      ru:"xodim ismi ru",
      en:"xodim ismi en"
    },
    jobLb:{
      uz:"xodim lavozimi uz",
      ru:"xodim lavozimi ru",
      en:"xodim lavozimi en",
    },
    telLb: "xodim telefon raqami",
    photoLb: "xodim rasmi",
    emailLb: "xodim emaili",

    isSelect: true,
    selectLb: "",
    options: [],


    isRectorat:true,


    isFmStudent: true
  }
  return (
    <div>
      <FormHeader title="Bo'limlar" buttonName="+" />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores pariatur error nam? Magni fugit repellat, illum modi enim molestias, labore quasi aperiam perspiciatis omnis harum possimus voluptates porro itaque ratione odio dolores, suscipit officia expedita iure? Impedit itaque quasi expedita, accusantium quaerat recusandae harum, ad numquam exercitationem in explicabo perferendis facilis culpa animi voluptate odio iure accusamus voluptates vel totam eius ducimus ipsa temporibus? Aut recusandae, quis nam qui corporis maiores unde? Tempora sed distinctio minus quod modi asperiores quia saepe odit animi aliquid magnam id qui deleniti laudantium suscipit soluta, enim pariatur, aperiam maxime incidunt? Quibusdam, dignissimos nemo beatae tempora tempore, sit ullam impedit culpa in consequatur distinctio voluptates dolorum. Quam necessitatibus voluptatibus quisquam? Eligendi sint et corporis nemo fugit delectus impedit, maiores nostrum enim facilis excepturi ut aut error ipsa qui! Culpa, eaque dolorem nesciunt autem nihil, voluptatem eveniet itaque quam corrupti quo odio officiis consequatur saepe sequi earum molestiae temporibus veniam accusantium, magnam obcaecati vero repellendus! Numquam asperiores delectus assumenda accusantium ipsum nam, ea dolorum! Reprehenderit assumenda totam reiciendis natus ex veniam ullam porro, illum beatae alias? Enim, amet ut velit animi tempora, incidunt repellendus officia culpa reiciendis eligendi, omnis cupiditate laboriosam quae! Asperiores, tempore, sequi error facilis vitae doloribus ipsam ab alias illo distinctio, accusamus nobis. Modi tempore consequatur officia commodi voluptatibus! Voluptate sed repellat sequi eius commodi facilis ipsam maxime quos impedit! Fuga quisquam ducimus autem voluptas voluptatibus eaque ab doloremque. Tenetur voluptatum quis et nulla ducimus consectetur dolorem reiciendis quisquam, sint perferendis? Reprehenderit perspiciatis aliquam facilis animi quos dolor deserunt omnis magni facere ipsa! Explicabo iure ipsa, vero, ea impedit nostrum saepe nam, commodi cupiditate praesentium deleniti esse amet iusto eaque pariatur eveniet magni! Nesciunt facere optio amet quaerat blanditiis sunt molestiae minus expedita iste numquam magni deserunt soluta quam officiis ducimus debitis accusantium nihil nemo, tempora fuga sed? Veniam molestias aut assumenda sapiente. Perferendis voluptas alias fugiat porro dicta maiores autem accusamus, non omnis quis excepturi, delectus similique necessitatibus iure ratione odio, aut earum nam nisi veniam tempore repudiandae nihil consequatur ex! Laudantium fuga hic deserunt quidem amet ex et molestias! Dolorem quod illo optio doloribus vero cupiditate perspiciatis vitae eaque! Dolorum, tenetur, expedita ut excepturi sed accusantium ad illo in velit eum asperiores, maiores perspiciatis? Soluta facilis officiis temporibus, eos illo quidem cum inventore nemo laboriosam id architecto minus earum veniam at, assumenda blanditiis magnam tenetur quas perspiciatis culpa totam est. Fuga itaque similique ratione placeat aliquid veritatis. Nulla, ea harum quos odio, laborum labore nihil voluptates modi dolorum quo, numquam veritatis cumque? Accusamus tempore repudiandae expedita nemo repellat vero, odio odit eveniet quod laboriosam, sed cum illo blanditiis iure! Voluptatibus vero accusamus harum autem eligendi esse non ipsam tempora delectus voluptatem veniam itaque dolorum inventore impedit distinctio, eveniet ipsum facere nisi architecto rem dolor. Similique autem in temporibus sunt quas dolorem excepturi obcaecati labore ea. Minus totam ipsam cupiditate nemo provident, nam quaerat eveniet consequatur animi dicta libero? Praesentium sint voluptate nihil ducimus vero laboriosam facere voluptatibus optio blanditiis ad.
      <XodimForm
        nameLb={props.nameLb}
        jobLb={props.jobLb}
      />
    </div>
  );
};

export default Bolim;
