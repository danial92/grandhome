(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(22),r=n.n(c),i=(n(58),n(59),n(6)),l=n.p+"static/media/gh_1.8c91a9a5.jpg",o=n.p+"static/media/gh_2.75c0d149.jpg",j=n.p+"static/media/gh_3.320d8eed.jpg",d=n(10),h=n.n(d),b=n(97),u=n(49),p=n(106),m=n(16),x=n(0);var O=e=>{let{project:t}=e;return Object(x.jsx)("div",{children:Object(x.jsxs)(p.a,{className:"my-3 py-2 px-2",style:{width:"18rem"},children:[Object(x.jsx)(m.Link,{onClick:()=>window.open("".concat(t.link)),children:Object(x.jsx)(p.a.Img,{variant:"top",src:t.img})}),Object(x.jsxs)(p.a.Body,{children:[Object(x.jsx)(m.Link,{onClick:()=>window.open("".concat(t.link)),children:Object(x.jsx)(p.a.Title,{style:{color:"black"},children:t.address})}),Object(x.jsx)(p.a.Text,{className:"text-md-left",children:t.status.toUpperCase()})]})]})})},v=n(27);n(88);var g=()=>{const[e,t]=Object(s.useState)([]),[n,a]=Object(s.useState)([]),[c,r]=Object(s.useState)([]);return console.log(e),Object(s.useEffect)((()=>{!async function(){try{const{data:e}=await h.a.get("/homeprojects");t(e.compProjects),a(e.renoProjects),r(e.upcomProjects)}catch(e){console.log(e)}}()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{textAlign:"center"},children:"Projects Completed"}),Object(x.jsxs)(b.a,{children:[e.slice(-4).sort(((e,t)=>t.order-e.order)).reverse().map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))),Object(x.jsx)(u.a,{sm:12,className:"text-center",children:Object(x.jsx)("div",{className:"see-more",children:Object(x.jsx)("h2",{children:Object(x.jsx)(v.Link,{to:"/completedprojects",children:"See More..."})})})})]}),Object(x.jsx)("h1",{style:{textAlign:"center"},children:"Projects Under Renovation"}),Object(x.jsxs)(b.a,{children:[n.slice(-4).sort(((e,t)=>t.order-e.order)).reverse().map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))),Object(x.jsx)(u.a,{sm:12,className:"text-center",children:Object(x.jsx)("div",{className:"see-more",children:Object(x.jsx)("h2",{children:Object(x.jsx)(v.Link,{to:"/renovationprojects",children:"See More..."})})})})]}),Object(x.jsx)("h1",{style:{textAlign:"center"},children:"Upcoming Projects"}),Object(x.jsxs)(b.a,{children:[c.slice(-4).sort(((e,t)=>t.order-e.order)).reverse().map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))),Object(x.jsx)(u.a,{sm:12,className:"text-center",children:Object(x.jsx)("div",{className:"see-more",children:Object(x.jsx)("h2",{children:Object(x.jsx)(v.Link,{to:"/upcomingprojects",children:"See More..."})})})})]})]})},y=(n(89),n(90),n.p+"static/media/banner_img.8f9f5f08.png");var f=function(){const[e,t]=Object(s.useState)([]),[n,a]=Object(s.useState)(!0);return console.log(e),Object(s.useEffect)((()=>{fetch("/topprojects",{method:"get",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t(e.projects),a(!1)})).catch((e=>{a(!1)}))}),[]),Object(x.jsxs)("div",{className:"banner-head",children:[Object(x.jsxs)("div",{className:"banner",children:[Object(x.jsxs)("div",{className:"banner-content",children:[Object(x.jsx)("h1",{children:"GRAND HOME INVESTMENTS"}),Object(x.jsx)("p",{children:"Grand Home Investments has been building quality homes in NJ and has completed over 100 projects in NJ and PA. We have built an incomparable reputation in the area over the years through referrals and impeccable reviews by building and delivering only the highest quality of homes."}),Object(x.jsx)("p",{children:"We are creating homes that are built to last, which means that your new home is efficient and sustainable, and it uses trusted brands for building materials and appliances. We offer designs that help a house become a home. Our experienced Design Consultants will curate a personalized array of home design options just for you. We build high quality homes starting from design all the way through the entire building process."}),Object(x.jsx)("p",{children:"Halal and Safe Real Estate Investments: Your trusted partner for halal and Sharia-compliant investment options in the USA. Firstly, we understand the importance of investing in a way that aligns with our faith and values. You can discover a unique opportunity to invest in real estate while adhering to halal principles. Contact us for more details."}),Object(x.jsx)("p",{children:"We offer a safe investment environment keeping Islamic values in mind. The localities in which the houses are invested are well-known areas of central New Jersey where demand is usually quite high. You also become partners in the LLC that you invest in to assure complete transparency."})]}),Object(x.jsxs)("div",{className:"completed-homes",children:[Object(x.jsx)("h2",{children:"RECENTLY COMPLETED HOMES"}),Object(x.jsx)("ul",{children:e?e.map((e=>Object(x.jsx)(v.Link,{onClick:()=>window.open("".concat(e.link)),children:Object(x.jsxs)("li",{children:[Object(x.jsx)("img",{src:e.img,alt:""}),Object(x.jsx)("span",{children:e.address})]})}))):null})]})]}),Object(x.jsx)("div",{style:{marginLeft:"-120px"},className:"banner-logo",children:Object(x.jsx)("img",{src:y,alt:""})})]})};var _=()=>Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{}),Object(x.jsxs)("div",{className:"about",children:[Object(x.jsxs)("div",{className:"about_box about_01",children:[Object(x.jsx)("img",{src:l,className:"rounded-circle",alt:"..."}),Object(x.jsx)("h2",{children:"Halal And Safe Investments"}),Object(x.jsx)("strong",{children:Object(x.jsx)("p",{children:"We offer a safe investment environment keeping the Islamic values in mind. The localities in which the houses are invested in, are well known areas of central NJ for ease of selling. Not only that, but you also become partners in the LLC that you invested in to assure complete transparency."})})]}),Object(x.jsxs)("div",{className:"about_box about_02",children:[Object(x.jsx)("img",{src:o,className:"rounded-circle",alt:"..."}),Object(x.jsx)("h2",{children:"A Proven Approach"}),Object(x.jsx)("strong",{children:Object(x.jsx)("p",{children:"An proven approach which is based on years of experience. We give timely updates, ease of transactions, profit analysis, that are combined with roll over opportunities. Transparency of estimates and expenses can be viewed by investors in real time. Your proceeds can easily be rolled over to upcoming projects with more chances of success, inshaAllah."})})]}),Object(x.jsxs)("div",{className:"about_box about_03",children:[Object(x.jsx)("img",{src:j,className:"rounded-circle",alt:"..."}),Object(x.jsx)("h2",{children:"Why Us?"}),Object(x.jsx)("strong",{children:Object(x.jsx)("p",{children:"We take the lead in assuring you that the money that sits in your bank ideally can be invested in profitable halal ventures. We make sure we analyze the markets and make comparisons before finally choosing the right property for you. We spend significant time in making sure that every potential property is researched upon in detail before making the final move. We are experienced enough to create different investment scenarios so that each decision is made wisely. Our past records makes us the right choice for you."})})]})]}),Object(x.jsx)(g,{})]}),C=n(105);var S=e=>{let{variant:t,children:n}=e;return Object(x.jsx)(C.a,{variant:t,children:n})},N=n(98);var w=()=>Object(x.jsx)("div",{children:Object(x.jsx)(N.a,{animation:"border",variant:"primary",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..!!!"})})});var I=()=>{const[e,t]=Object(s.useState)([]),[n,a]=Object(s.useState)(!0);return console.log(e),Object(s.useEffect)((()=>{fetch("/allprojects",{method:"get",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t(e.projects),a(!1)})).catch((e=>{a(!1)}))}),[]),Object(x.jsxs)("div",{style:{height:"70%"},children:[Object(x.jsx)("h2",{className:"text-center",children:"Project Gallery"}),n?Object(x.jsx)(w,{}):Object(x.jsx)(b.a,{children:e?e.slice().reverse().map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))):Object(x.jsx)(S,{variant:"primary",children:"No Projects Yet..."})})]})},k=n(102),P=n(99);var E=()=>{const{state:e}=Object(s.useContext)(se),[t,n]=Object(s.useState)(""),[a,c]=Object(s.useState)(""),[r,i]=Object(s.useState)(""),[l,o]=Object(s.useState)(""),[j,d]=Object(s.useState)(""),[b,u]=Object(s.useState)(!1),[p,m]=Object(s.useState)(!1),[O,v]=Object(s.useState)(!1);return Object(x.jsxs)("div",{style:{height:"70vh"},children:[Object(x.jsx)("h2",{className:"text-center",children:"Admin Page"}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:e?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k.a,{onSubmit:async e=>{e.preventDefault(),m(!0);try{const e=new FormData;e.append("image",j);const s=await h.a.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"}});200===(await h.a.post("/create",{link:t,address:a,status:r,order:l,img:s.data.secure_url,top:b},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}})).status?(v(!0),n(""),c(""),i(""),o(""),d(""),u(!1)):console.log("Error creating project")}catch(s){console.log(s),console.log("Error uploading image")}finally{m(!1)}},children:[Object(x.jsxs)(k.a.Group,{controlId:"link",children:[Object(x.jsx)(k.a.Label,{children:"Link"}),Object(x.jsx)(k.a.Control,{type:"link",placeholder:"Enter link",value:t,onChange:e=>n(e.target.value)})]}),Object(x.jsxs)(k.a.Group,{controlId:"address",children:[Object(x.jsx)(k.a.Label,{children:"Address"}),Object(x.jsx)(k.a.Control,{type:"address",placeholder:"Enter address",value:a,onChange:e=>c(e.target.value)})]}),Object(x.jsxs)(k.a.Group,{controlId:"status",children:[Object(x.jsx)(k.a.Label,{children:"Status"}),Object(x.jsx)(k.a.Control,{type:"status",placeholder:"Enter status",value:r,onChange:e=>i(e.target.value)})]}),Object(x.jsxs)(k.a.Group,{controlId:"order",children:[Object(x.jsx)(k.a.Label,{children:"Order"}),Object(x.jsx)(k.a.Control,{type:"order",placeholder:"Enter order",value:l,onChange:e=>o(e.target.value)})]}),Object(x.jsxs)(k.a.Group,{controlId:"image",children:[Object(x.jsx)(k.a.Label,{children:"Image"}),Object(x.jsx)(k.a.File,{id:"image_file",label:"Choose Image",custom:!0,onChange:e=>d(e.target.files[0])}),p&&Object(x.jsx)(w,{})]}),Object(x.jsx)(k.a.Group,{controlId:"istop",children:Object(x.jsx)(k.a.Check,{type:"checkbox",label:"Top",checked:b,onChange:e=>u(e.target.checked)})}),Object(x.jsx)(P.a,{className:"btn btn-block",type:"submit",variant:"primary",children:"Add"})]}),O&&Object(x.jsx)(S,{variant:"success",children:"Project Added Successfully..!!!"})]}):Object(x.jsx)(S,{variant:"primary",children:"Only Admin can access this Resource"})})]})},D=n(100),A=n(52);var R=()=>{const{state:e,dispatch:t}=Object(s.useContext)(se),n=Object(i.useHistory)(),[a,c]=Object(s.useState)(""),[r,l]=Object(s.useState)(""),[o,j]=Object(s.useState)(!1);Object(s.useEffect)((()=>{e&&n.push("/")}),[e,n]);return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"70vh"},children:Object(x.jsxs)("div",{style:{width:"30%"},children:[o&&Object(x.jsx)(S,{variant:"danger",children:"Login Failed..."}),Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsx)("span",{children:"Email"}),Object(x.jsx)(D.a,{className:"mb-3",children:Object(x.jsx)(A.a,{type:"text","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:a,onChange:e=>c(e.target.value)})}),Object(x.jsx)("span",{children:"Password"}),Object(x.jsx)(D.a,{className:"mb-3",children:Object(x.jsx)(A.a,{type:"password","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:r,onChange:e=>l(e.target.value)})}),Object(x.jsx)(P.a,{onClick:()=>{fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:r})}).then((e=>e.json())).then((e=>{e.error?console.log(e.error):e.user&&void 0!==e.token?(localStorage.setItem("user",JSON.stringify(e.user)),localStorage.setItem("jwt",e.token),n.push("/admin"),t({type:"USER",payload:e.user})):j(!0)})).catch((e=>console.log(e)))},type:"submit",children:"Sign In"})]})})},T=n(104),L=n(101),F=n(103),G=n(53),W=n.p+"static/media/ghi_icon.ba1ff313.png";var H=()=>{const{state:e,dispatch:t}=Object(s.useContext)(se),n=Object(i.useHistory)();return Object(x.jsx)("header",{children:Object(x.jsx)(T.a,{bg:"primary",variant:"dark",expand:"lg",children:Object(x.jsxs)(L.a,{style:{maxWidth:"none",padding:0},children:[Object(x.jsx)(T.a.Brand,{href:"/",style:{margin:"0rem 4rem"},children:Object(x.jsx)("img",{style:{width:"75px",height:"70px"},src:W,alt:""})}),Object(x.jsx)(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(T.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(F.a,{style:{margin:"0rem 8rem"},className:"ml-auto",children:[" ",Object(x.jsx)(G.LinkContainer,{style:{fontSize:"27px",fontFamily:"math"},to:"/projects",children:Object(x.jsx)(F.a.Link,{style:{cursor:"pointer"},children:"Project Gallery"})}),Object(x.jsx)(F.a.Link,{style:{fontFamily:"math",fontSize:"27px",marginLeft:"1rem",cursor:"pointer"},onClick:()=>{document.getElementById("footer").scrollIntoView({behavior:"smooth"})},children:"Contact Us"}),e&&Object(x.jsx)(P.a,{variant:"primary",onClick:()=>{localStorage.clear(),t({type:"CLEAR"}),n.push("/login")},children:"Logout"})]})})]})})})};const z=(e,t)=>"USER"===t.type?t.payload:"CLEAR"===t.type?null:e;var M=()=>Object(x.jsx)("footer",{id:"footer",children:Object(x.jsx)(b.a,{className:"text-center",children:Object(x.jsxs)(L.a,{className:"primary",children:[Object(x.jsx)("h5",{children:"Contact Info"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Email: "}),"grandhomeinvestments@gmail.com"]}),Object(x.jsxs)("p",{style:{fontSize:"24px"},children:[Object(x.jsx)("strong",{children:"Phone: "}),"(732) 233-4744"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Privacy Policy: "}),"No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties"]}),Object(x.jsx)(u.a,{children:"Copyright \xa9 Grand Home Investments"})]})})});var U=e=>{let{onSubmit:t,onReset:n,formData:s,setFormData:a}=e;const{investor_name:c,first_name:r,middle_name:i,last_name:l,email1:o,email2:j,phone_number:d,is_llc:h,company_name:b,address1:u,address2:p,city:m,state:O,zip:v,country:g}=s||{},y=(e,t)=>{a((n=>({...n,[e]:t})))};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Add Investor"}),Object(x.jsx)("div",{className:"form-align",children:Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Investor Name:",Object(x.jsx)("input",{type:"text",value:null!==c&&void 0!==c?c:"",onChange:e=>y("investor_name",e.target.value)})]}),Object(x.jsxs)("label",{children:["First Name:",Object(x.jsx)("input",{type:"text",value:null!==r&&void 0!==r?r:"",onChange:e=>y("first_name",e.target.value)})]}),Object(x.jsxs)("label",{children:["Middle Name:",Object(x.jsx)("input",{type:"text",value:null!==i&&void 0!==i?i:"",onChange:e=>y("middle_name",e.target.value)})]}),Object(x.jsxs)("label",{children:["Last Name:",Object(x.jsx)("input",{type:"text",value:null!==l&&void 0!==l?l:"",onChange:e=>y("last_name",e.target.value)})]})]}),Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Email 1:",Object(x.jsx)("input",{type:"email",value:null!==o&&void 0!==o?o:"",onChange:e=>y("email1",e.target.value)})]}),Object(x.jsxs)("label",{children:["Email 2:",Object(x.jsx)("input",{type:"email",value:null!==j&&void 0!==j?j:"",onChange:e=>y("email2",e.target.value)})]})]}),Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Phone Number:",Object(x.jsx)("input",{type:"tel",value:null!==d&&void 0!==d?d:"",onChange:e=>y("phone_number",e.target.value)})]}),Object(x.jsxs)("label",{style:{display:"flex"},children:[Object(x.jsx)("p",{children:"Is LLC:"}),Object(x.jsx)("input",{type:"checkbox",checked:null!==h&&void 0!==h&&h,onChange:e=>y("is_llc",e.target.checked)})]}),Object(x.jsxs)("label",{children:["Company Name:",Object(x.jsx)("input",{type:"text",value:null!==b&&void 0!==b?b:"",onChange:e=>y("company_name",e.target.value)})]})]}),Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Address 1:",Object(x.jsx)("input",{type:"text",value:null!==u&&void 0!==u?u:"",onChange:e=>y("address1",e.target.value)})]}),Object(x.jsxs)("label",{children:["Address 2:",Object(x.jsx)("input",{type:"text",value:null!==p&&void 0!==p?p:"",onChange:e=>y("address2",e.target.value)})]})]}),Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["City:",Object(x.jsx)("input",{type:"text",value:null!==m&&void 0!==m?m:"",onChange:e=>y("city",e.target.value)})]}),Object(x.jsxs)("label",{children:["State:",Object(x.jsx)("input",{type:"text",value:null!==O&&void 0!==O?O:"",onChange:e=>y("state",e.target.value)})]})]}),Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Zip:",Object(x.jsx)("input",{type:"text",value:null!==v&&void 0!==v?v:"",onChange:e=>y("zip",e.target.value)})]}),Object(x.jsxs)("label",{children:["Country:",Object(x.jsx)("input",{type:"text",value:null!==g&&void 0!==g?g:"",onChange:e=>y("country",e.target.value)})]})]}),Object(x.jsx)("button",{type:"submit",children:"Add Investor"})]})})]})};var J=e=>{let{onSubmit:t,onReset:n,formData:s,setFormData:a}=e;const{address:c,city:r,zip:i,country:l,buy_date:o,sell_date:j,llc_name:d,total_investment:h}=s||{},b=(e,t)=>{a((n=>({...n,[e]:t})))};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Add Property"}),Object(x.jsx)("div",{className:"form-align",children:Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Address:",Object(x.jsx)("input",{type:"text",value:null!==c&&void 0!==c?c:"",onChange:e=>b("address",e.target.value)})]}),Object(x.jsxs)("label",{children:["City:",Object(x.jsx)("input",{type:"text",value:null!==r&&void 0!==r?r:"",onChange:e=>b("city",e.target.value)})]}),Object(x.jsxs)("label",{children:["Zip:",Object(x.jsx)("input",{type:"text",value:null!==i&&void 0!==i?i:"",onChange:e=>b("zip",e.target.value)})]}),Object(x.jsxs)("label",{children:["Country:",Object(x.jsx)("input",{type:"text",value:null!==l&&void 0!==l?l:"",onChange:e=>b("country",e.target.value)})]})]}),Object(x.jsxs)("div",{className:"two_in_row",children:[Object(x.jsxs)("label",{children:["Buy Date:",Object(x.jsx)("input",{type:"date",value:null!==o&&void 0!==o?o:"",onChange:e=>b("buy_date",e.target.value)})]}),Object(x.jsxs)("label",{children:["Sell Date:",Object(x.jsx)("input",{type:"date",value:null!==j&&void 0!==j?j:"",onChange:e=>b("sell_date",e.target.value)})]})]}),Object(x.jsxs)("label",{children:["LLC Name:",Object(x.jsx)("input",{type:"text",value:null!==d&&void 0!==d?d:"",onChange:e=>b("llc_name",e.target.value)})]}),Object(x.jsxs)("label",{children:["Total Investment:",Object(x.jsx)("input",{type:"number",value:null!==h&&void 0!==h?h:0,onChange:e=>b("total_investment",e.target.value)})]}),Object(x.jsx)("button",{type:"submit",children:"Add Property"})]})})]})};var Y=e=>{let{onSubmit:t,onReset:n,formData:s,setFormData:a,investors:c,properties:r}=e;const{investor_id:i,property_id:l,principle:o,profit:j}=s||{};console.log(c);const d=(e,t)=>{a((n=>({...n,[e]:t})))};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Add Investment"}),Object(x.jsx)("div",{className:"form-align",children:Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("label",{children:["Investor ID:",Object(x.jsxs)("select",{value:null!==i&&void 0!==i?i:"",onChange:e=>d("investor_id",e.target.value),children:[Object(x.jsx)("option",{value:"",children:"Select Investor"}),c?c.map((e=>Object(x.jsx)("option",{value:e.investor_id,children:e.investor_name},e.investor_id))):null]})]}),Object(x.jsxs)("label",{children:["Property ID:",Object(x.jsxs)("select",{value:null!==l&&void 0!==l?l:"",onChange:e=>d("property_id",e.target.value),children:[Object(x.jsx)("option",{value:"",children:"Select Property"}),r?r.map((e=>Object(x.jsx)("option",{value:e.property_id,children:e.address},e.property_id))):null]})]}),Object(x.jsxs)("label",{children:["Principle:",Object(x.jsx)("input",{type:"number",value:null!==o&&void 0!==o?o:"",onChange:e=>d("principle",e.target.value)})]}),Object(x.jsxs)("label",{children:["Profit:",Object(x.jsx)("input",{type:"number",value:null!==j&&void 0!==j?j:"",onChange:e=>d("profit",e.target.value)})]}),Object(x.jsx)("button",{type:"submit",children:"Add Investment"})]})})]})};var B=e=>{let{onSubmit:t,onReset:n,formData:s,setFormData:a,investments:c,properties:r}=e;const{investment_id:i,from_property_id:l,amount:o,transaction_type:j,transaction_date:d,is_combined_rollover:h,method_of_payment:b}=s||{},u=(e,t)=>{a((n=>({...n,[e]:t})))};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Add Transaction"}),Object(x.jsx)("div",{className:"form-align",children:Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("label",{children:["Investment ID:",Object(x.jsxs)("select",{value:null!==i&&void 0!==i?i:"",onChange:e=>u("investment_id",e.target.value),children:[Object(x.jsx)("option",{value:"",children:"Select Property"}),c?c.map((e=>Object(x.jsxs)("option",{value:e.investment_id,children:[e.Investor.investor_name," | ",e.Property.address," | Principle: ",e.principle," | Profit: ",e.profit]},e.investment_id))):null]})]}),Object(x.jsxs)("label",{children:["From Property ID:",Object(x.jsxs)("select",{value:null!==l&&void 0!==l?l:"",onChange:e=>u("from_property_id",e.target.value),children:[Object(x.jsx)("option",{value:"",children:"Select Property"}),r?r.map((e=>Object(x.jsx)("option",{value:e.property_id,children:e.address},e.property_id))):null]})]}),Object(x.jsxs)("label",{children:["Amount:",Object(x.jsx)("input",{type:"number",value:null!==o&&void 0!==o?o:"",onChange:e=>u("amount",e.target.value)})]}),Object(x.jsxs)("label",{children:["Transaction Type:",Object(x.jsxs)("select",{value:null!==j&&void 0!==j?j:"",onChange:e=>u("transaction_type",e.target.value),children:[Object(x.jsx)("option",{value:"",children:"Select Transaction Type"}),Object(x.jsx)("option",{value:"Rollover",children:"Rollover"}),Object(x.jsx)("option",{value:"Return of Investment",children:"Return of Investment"}),Object(x.jsx)("option",{value:"New Investment",children:"New Investment"})]})]}),Object(x.jsxs)("label",{children:["Transaction Date:",Object(x.jsx)("input",{type:"date",value:null!==d&&void 0!==d?d:"",onChange:e=>u("transaction_date",e.target.value)})]}),Object(x.jsxs)("label",{children:["Method of Payment:",Object(x.jsxs)("select",{value:null!==b&&void 0!==b?b:"",onChange:e=>u("method_of_payment",e.target.value),children:[Object(x.jsx)("option",{value:"",children:"Select Method of Payment"}),Object(x.jsx)("option",{value:"ACH",children:"ACH"}),Object(x.jsx)("option",{value:"WIRE",children:"WIRE"}),Object(x.jsx)("option",{value:"CHECK",children:"CHECK"})]})]}),Object(x.jsx)("button",{type:"submit",children:"Add Transaction"})]})})]})};n(93);const q=e=>{let{investments:t}=e;return console.log(t),Object(x.jsxs)("table",{className:"styled-table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Investment ID"}),Object(x.jsx)("th",{children:"Principle"}),Object(x.jsx)("th",{children:"Profit"}),Object(x.jsx)("th",{children:"Property Name"})]})}),Object(x.jsx)("tbody",{children:t.map((e=>Object(x.jsx)(K,{investment:e},e.investment_id)))})]})},K=e=>{let{investment:t}=e;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.investment_id}),Object(x.jsx)("td",{children:t.principle}),Object(x.jsx)("td",{children:t.profit}),Object(x.jsx)("td",{children:t.Property.address})]})},V=e=>{let{transactions:t}=e;return console.log(t),Object(x.jsxs)("table",{className:"styled-table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Transaction ID"}),Object(x.jsx)("th",{children:"Amount"}),Object(x.jsx)("th",{children:"Profit or Principle"}),Object(x.jsx)("th",{children:"From Property Name"}),Object(x.jsx)("th",{children:"Transaction Type"}),Object(x.jsx)("th",{children:"Transaction Date"}),Object(x.jsx)("th",{children:"Method of Payment"})]})}),Object(x.jsx)("tbody",{children:t.map(((e,t)=>e.map((e=>Object(x.jsx)(Z,{transaction:e},t+"-"+e.transaction_id)))))})]})},Z=e=>{let{transaction:t}=e;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.transaction_id}),Object(x.jsx)("td",{children:t.amount}),Object(x.jsx)("td",{children:t.principle_or_profit}),Object(x.jsx)("td",{children:t.Property.address}),Object(x.jsx)("td",{children:t.transaction_type}),Object(x.jsx)("td",{children:t.transaction_date}),Object(x.jsx)("td",{children:t.method_of_payment})]})};var Q=e=>{let{onSubmit:t,onReset:n,formData:s,setFormData:a,data:c}=e;const{investor_name:r}=s||{};console.log(c||null);return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Get Investor Data"}),Object(x.jsx)("form",{onSubmit:t,children:Object(x.jsxs)("div",{className:"investor_data_form_div",children:[Object(x.jsxs)("label",{children:["Investor Name:",Object(x.jsx)("input",{type:"text",value:null!==r&&void 0!==r?r:"",onChange:e=>{return t="investor_name",n=e.target.value,void a((e=>({...e,[t]:n})));var t,n}})]}),Object(x.jsx)("button",{type:"submit",children:"Get Data"})]})}),c?Object(x.jsxs)("div",{className:"investor_data_div",children:[Object(x.jsx)("h1",{children:c.investor_name}),Object(x.jsx)("h2",{children:"Investments"}),Object(x.jsx)(q,{investments:c.Investments}),Object(x.jsx)("h2",{children:"Transactions"}),Object(x.jsx)(V,{transactions:c.Investments.map((e=>e.Transactions))})]}):null]})};n(94);var X=function(){const[e,t]=Object(s.useState)(null),[n,a]=Object(s.useState)(null),[c,r]=Object(s.useState)(null),[i,l]=Object(s.useState)(null),[o,j]=Object(s.useState)(null);console.log(o);const[d,b]=Object(s.useState)(null),[u,p]=Object(s.useState)(null),[m,O]=Object(s.useState)(""),[v,g]=Object(s.useState)(""),[y,f]=Object(s.useState)("");console.log(n);const _=()=>{"get_investor_data"===e&&a({investor_name:""}),"investor"===e?a({investor_name:""}):"property"===e?a({address:""}):("investment"===e||"transaction"===e)&&a({})},C=async t=>{if(t.preventDefault(),!n||0===Object.keys(n).length)return g("Form data is empty"),void O("");try{if("get_investor_data"===e)try{const e=await h.a.get("/get_investor_data/".concat(n.investor_name));console.log(e.data),r(e.data)}catch(s){g("Error adding investment: ".concat(s.message))}else if("investor"===e)try{const e=await h.a.post("/add_investor",n);console.log("Investor added successfully:",e.data),O("Investor added successfully")}catch(a){g("Error adding investment: ".concat(a.message))}else if("property"===e)try{const e=await h.a.post("/add_property",n);console.log("Property added successfully:",e.data),O("Property added successfully")}catch(c){g("Error adding investment: ".concat(c.message))}else if("investment"===e)try{const e=await h.a.post("/add_investment",n),t=await h.a.get("/get_properties");b(t.data.investors_data),console.log("Investment added successfully:",e.data),O("Investment added successfully")}catch(o){g("Error adding investment: ".concat(o.message))}else if("transaction"===e)try{const e=await h.a.post("/add_transaction",n);console.log("Transaction added successfully:",e.data),O("Transaction added successfully")}catch(j){g("Error adding investment: ".concat(j.message))}_(),l(null)}catch(i){l(i.message||"An error occurred")}};return Object(s.useEffect)((()=>{(async()=>{try{const e=await h.a.get("/get_investors"),t=await h.a.get("/get_properties"),n=await h.a.get("/get_investments");j(e.data),b(t.data),p(n.data)}catch(i){console.error("Error fetching data:",i)}})()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"header_div",children:[Object(x.jsx)("h1",{children:"Grand Home Investments Database"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:()=>t("get_investor_data"),children:"Get Investor Data"}),Object(x.jsx)("button",{onClick:()=>t("investor"),children:"Add Investor"}),Object(x.jsx)("button",{onClick:()=>t("property"),children:"Add Property"}),Object(x.jsx)("button",{onClick:()=>t("investment"),children:"Add Investment"}),Object(x.jsx)("button",{onClick:()=>t("transaction"),children:"Add Transaction"})]}),Object(x.jsxs)("div",{children:[m?Object(x.jsx)("div",{className:"message-container success-message",children:Object(x.jsx)("h3",{children:m})}):null,v?Object(x.jsx)("div",{className:"message-container error-message",children:Object(x.jsx)("h3",{children:v})}):null]})]}),(()=>{switch(e){case"get_investor_data":return Object(x.jsx)(Q,{onSubmit:C,onReset:_,formData:n,setFormData:a,data:c});case"investor":return Object(x.jsx)(U,{onSubmit:C,onReset:_,formData:n,setFormData:a,data:c});case"property":return Object(x.jsx)(J,{onSubmit:C,onReset:_,formData:n,setFormData:a,data:c});case"investment":return Object(x.jsx)(Y,{onSubmit:C,onReset:_,formData:n,setFormData:a,data:c,investors:o,properties:d});case"transaction":return Object(x.jsx)(B,{onSubmit:C,onReset:_,formData:n,setFormData:a,data:c,properties:d,investments:u});default:return null}})()]})};var $=function(){return Object(x.jsx)("div",{children:"RandomScreen"})};var ee=()=>{const[e,t]=Object(s.useState)([]),[n,a]=Object(s.useState)(!0);return console.log(e),Object(s.useEffect)((()=>{fetch("/completedprojects",{method:"get",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t(e.projects),a(!1)})).catch((e=>{a(!1)}))}),[]),Object(x.jsxs)("div",{style:{height:"70%"},children:[Object(x.jsx)("h2",{className:"text-center",children:"Completed Projects"}),n?Object(x.jsx)(w,{}):Object(x.jsx)(b.a,{children:e?e.map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))):Object(x.jsx)(S,{variant:"primary",children:"No Projects Yet..."})})]})};var te=()=>{const[e,t]=Object(s.useState)([]),[n,a]=Object(s.useState)(!0);return console.log(e),Object(s.useEffect)((()=>{fetch("/renovationprojects",{method:"get",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t(e.projects),a(!1)})).catch((e=>{a(!1)}))}),[]),Object(x.jsxs)("div",{style:{height:"70%"},children:[Object(x.jsx)("h2",{className:"text-center",children:"Projects Under Renovation"}),n?Object(x.jsx)(w,{}):Object(x.jsx)(b.a,{children:e?e.map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))):Object(x.jsx)(S,{variant:"primary",children:"No Projects Yet..."})})]})};var ne=()=>{const[e,t]=Object(s.useState)([]),[n,a]=Object(s.useState)(!0);return console.log(e),Object(s.useEffect)((()=>{fetch("/upcomingprojects",{method:"get",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t(e.projects),a(!1)})).catch((e=>{a(!1)}))}),[]),Object(x.jsxs)("div",{style:{height:"70%"},children:[Object(x.jsx)("h2",{className:"text-center",children:"Upcoming Projects"}),n?Object(x.jsx)(w,{}):Object(x.jsx)(b.a,{children:e?e.map((e=>Object(x.jsx)(u.a,{sm:12,md:6,lg:4,xl:3,children:Object(x.jsx)(O,{project:e})},e._id))):Object(x.jsx)(S,{variant:"primary",children:"No Projects Yet..."})})]})};const se=Object(s.createContext)();function ae(){const e=Object(i.useHistory)(),{state:t,dispatch:n}=Object(s.useContext)(se);return Object(s.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("user"));e&&n({type:"USER",payload:e})}),[n,e]),Object(x.jsxs)("div",{className:"py-4 px-5",children:[Object(x.jsx)(i.Route,{path:"/admin",component:E,exact:!0}),Object(x.jsx)(i.Route,{path:"/login",component:R,exact:!0}),Object(x.jsx)(i.Route,{path:"/completedprojects",component:ee,exact:!0}),Object(x.jsx)(i.Route,{path:"/renovationprojects",component:te,exact:!0}),Object(x.jsx)(i.Route,{path:"/upcomingprojects",component:ne,exact:!0}),Object(x.jsx)(i.Route,{path:"/projects",component:I}),Object(x.jsx)(i.Route,{path:"/random",component:$}),Object(x.jsx)(i.Route,{path:"/db",component:X}),Object(x.jsx)(i.Route,{path:"/",component:_,exact:!0})]})}var ce=function(){const[e,t]=Object(s.useReducer)(z,null);return Object(x.jsx)(se.Provider,{value:{state:e,dispatch:t},children:Object(x.jsxs)(m.BrowserRouter,{children:[Object(x.jsx)(H,{}),Object(x.jsx)(ae,{}),Object(x.jsx)(M,{})]})})};var re=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((t=>{let{getCLS:n,getFID:s,getFCP:a,getLCP:c,getTTFB:r}=t;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ce,{})}),document.getElementById("root")),re()}},[[95,1,2]]]);
//# sourceMappingURL=main.07abbba9.chunk.js.map