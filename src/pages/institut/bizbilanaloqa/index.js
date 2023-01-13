import { useContext } from 'react';
import { Context } from '../../../context';
import BizBilanAloqaLang from './lang';


function BizBilanAloqa() {
    const { lang } = useContext(Context);
    return (
      <div className='wrapped mb-5'>
         <div className="bizningmanzilwrapper">
                      <div className="bizningmanziltext">
                        <h3>{BizBilanAloqaLang[lang].text1}</h3><br/>
                        <h5>
                          {BizBilanAloqaLang[lang].text2} :
                          <a href="tel:+998712447849">(+998 71)244-78-49</a>
                        </h5>
                        <hr />

                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{BizBilanAloqaLang[lang].bizningManzil.first}</h4>
                            <p>
                            
                              {BizBilanAloqaLang[lang].bizningManzil.sixth}32 100011
                              <br />
                              <span>{BizBilanAloqaLang[lang].bizningManzil.second}</span>
                              <a href="tel:+998712447920">
                                (+998-71) 244-79-20
                              </a>
                              <br />
                              <span>
                                {BizBilanAloqaLang[lang].bizningManzil.third}
                              </span>{" "}
                              (+998-71) 244-79-17 <br />
                              <span>
                                {BizBilanAloqaLang[lang].bizningManzil.fourth}
                              </span>{" "}
                              <a href="mailto:txti_rektor@edu.uz">
                                txti_rektor@edu.uz
                              </a>
                              , <a href="mailto:info@tcti.uz">info@tcti.uz</a>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{BizBilanAloqaLang[lang].faculty_names.fourth}</h4>
                            <p>
                              {BizBilanAloqaLang[lang].bizningManzil.fifth}
                              <br /> Tel. 267-98-32
                            </p>
                          </div>
                          <hr />
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{BizBilanAloqaLang[lang].faculty_names.second}</h4>
                            <p>
                              {BizBilanAloqaLang[lang].bizningManzil.sixth}36. <br /> Tel.
                              (998-71) 244-19-72
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{BizBilanAloqaLang[lang].faculty_names.first}</h4>
                            <p>
                              {BizBilanAloqaLang[lang].bizningManzil.sixth}32 <br /> Tel.
                              (998-71) 244-92-35
                            </p>
                          </div>
                          <hr />
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{BizBilanAloqaLang[lang].faculty_names.third}</h4>
                            <p>
                              {BizBilanAloqaLang[lang].bizningManzil.seventh}
                              <br /> Tel. (998-71) 273-64-60
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <h4>{BizBilanAloqaLang[lang].bizningManzil.nineth}</h4>
                            <p>{BizBilanAloqaLang[lang].bizningManzil.sixth}32</p>
                          </div>
                          <hr />
                        </div>
                        <div className="row">
                          <h4>{BizBilanAloqaLang[lang].text3}</h4>
                          <p>
                            {BizBilanAloqaLang[lang].bizningManzil.eightth}
                            <br /> Tel. (998-71) 221-61-33
                          </p>
                          <hr />
                        </div>
                      </div>
                      <div className="map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s"
                          allowFullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
      </div>
    );
}

export default BizBilanAloqa;