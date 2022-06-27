/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
// import React, { useState } from "react";
// import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
// import Button from "react-bootstrap/Button";
// import { questions } from "./faq_data";
// import Accordian from "./Accordian";
// import "./Accordian.css";
//
// const FAQs = () => {
//   const [data, setData] = useState(questions);
//   return (
//     <>
//       <MDBCard>
//         <MDBCardBody>
//           <MDBRow center>
//             <MDBCol size="6">
//               <form className="d-flex" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//               </form>
//             </MDBCol>
//           </MDBRow>
//           <br />
//           <section className="main-div">
//             <div className="acc-h1">
//               New to Tech Indus One?
//               <h4>Here are some articles to get you started</h4>
//               {/* Some cards here about company articles */}
//             </div>
//             <h3 className="gen">General Questions</h3>
//             {data.map((curElem) => {
//               return <Accordian key={curElem.id} {...curElem} />;
//               //here the spread operator is use to pass the the properties of the questions api
//             })}
//           </section>
//         </MDBCardBody>
//       </MDBCard>
//     </>
//   );
// };
//
// export default FAQs;
