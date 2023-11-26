"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{3007:function(e,t,r){r.r(t);var l=r(5893),s=r(7294),a=r(8193),n=r(6893);let o={name:"",email:"",message:""};t.default=()=>{let[{name:e,email:t,message:r},i]=(0,s.useState)(o),[d,p]=(0,s.useState)(!1),[u,m]=(0,s.useState)(!1),[c,f]=(0,s.useState)(!1),[x,g]=(0,s.useState)("Send"),b=e=>{let{name:t,value:r}=e.target;i(e=>({...e,[t]:r}))},h=()=>i({...o}),w=e=>String(e).toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return(0,l.jsx)("main",{id:"contact",className:"relative bg-transparent w-screen flex flex-col justify-center items-start px-5 md:px-10 lg:px-48 pt-28",children:(0,l.jsxs)("div",{"data-aos":"fade-up",className:"w-full h-full z-20",children:[(0,l.jsx)("h2",{className:"text-4xl font-semibold text-violet-100/80 mb-5 font-helvetica",children:"Contact"}),(0,l.jsx)("h3",{className:"mb-4 text-lg font-normal text-violet-100/80",children:"Get In Touch!"}),(0,l.jsxs)("div",{className:"w-full flex flex-col lg:flex-row justify-between lg:items-stretch items-center",children:[(0,l.jsxs)("form",{onSubmit:l=>{if(l.preventDefault(),!w(t)){p(!0);return}if(p(!1),0===r.trim().length){m(!0);return}m(!1),g("Sending..."),fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,message:r})}).then(e=>{if(200===e.status)h(),f(!1),g("Sent!");else throw Error("Something went wrong")}).catch(e=>{f(!0),g("Send")})},className:"w-full lg:w-3/5 flex flex-col justify-between items-start md:mb-10",name:"form",autoComplete:"off",children:[(0,l.jsx)("input",{type:"text",id:"name",name:"name",className:"p-3 mb-3 w-full text-violet-100/80 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50",placeholder:"Full Name",required:!0,onChange:b}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",className:"p-3 mb-3 w-full text-violet-100/80 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50",placeholder:"Email",required:!0,onChange:b}),(0,l.jsx)("textarea",{name:"message",id:"message",className:"p-3 mb-3 w-full text-violet-100/80 placeholder:text-slate-50/50 text-sm duration-300 transition-all ease-in-out border-[1px] hover:border-purple-300/60 border-slate-50/10 bg-transparent bg-gradient-to-br from-slate-50/[0.03] to-transparent rounded-md backdrop-blur-lg resize-y min-h-[80px] h-40 max-h-96 focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/30 focus:ring-purple-600/50",rows:6,placeholder:"Message",required:!0,onChange:b}),(0,l.jsx)("button",{type:"submit",className:"w-full duration-300 transition-all ease-in-out border-[1px] enabled:hover:border-purple-600/40 enabled:hover:shadow-[0_0_25px_-5px] enabled:hover:shadow-purple-600/10 border-slate-50/10 enabled:bg-transparent enabled:bg-gradient-to-br enabled:from-slate-50/[0.08] enabled:via-slate-50/[0.03] enabled:to-slate-50/[0.01] rounded-md backdrop-blur-lg enabled:focus:ring-2 enabled:focus:ring-offset-1 enabled:focus:ring-offset-purple-500/50 enabled:focus:ring-purple-600/70 "+("Sent!"===x?"send-success":"Sending..."===x?"sending":""),disabled:"Send"!=x,children:(0,l.jsx)("p",{className:"px-6 py-3 duration-300 transition-all ease-in-out text-violet-100/80 !bg-clip-text gradient-purple font-bold "+(!("Send"!=x)&&"hover:text-transparent cursor-pointer"),children:x})}),(0,l.jsxs)("div",{className:"h-8",children:[d&&(0,l.jsx)("p",{className:"text-red-500 text-sm font-semibold mt-3",children:"Please enter a valid email address."}),u&&(0,l.jsx)("p",{className:"text-red-500 text-sm font-semibold mt-3",children:"Please enter a message."}),c&&(0,l.jsx)("p",{className:"text-red-500 text-sm font-semibold mt-3",children:"Something went wrong. Please try again."})]})]}),(0,l.jsxs)("div",{className:"w-full lg:w-2/5 pt-8 md:pt-0 md:px-8 flex flex-col h-full justify-between items-start",children:[(0,l.jsx)("div",{className:"flex flex-row justify-start items-center mb-5",children:(0,l.jsxs)("a",{href:"https://www.instagram.com/yrhacks/",target:"_blank",rel:"noopener noreferrer",className:"text-violet-100/80 ml-2 text-sm md:text-lg flex items-center duration-300 ease-in-out transition-all group hover:text-transparent gradient-purple !bg-clip-text",children:[(0,l.jsx)(n.JID,{className:"text-violet-100/80 group-hover:text-indigo-600 duration-300 text-lg md:text-2xl mr-3"}),"@yrhacks"]})}),(0,l.jsx)("div",{className:"flex flex-row justify-start items-center",children:(0,l.jsxs)("a",{href:"mailto:yorkregionhacks@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"text-violet-100/80 ml-2 text-sm md:text-lg flex items-center duration-300 ease-in-out transition-all group hover:text-transparent gradient-purple !bg-clip-text",children:[(0,l.jsx)(n.Imn,{className:"text-violet-100/80 group-hover:text-indigo-600 duration-300 text-lg md:text-2xl mr-3"}),"yorkregionhacks@gmail.com"]})}),(0,l.jsxs)("div",{className:"pt-7 mx-1 w-full",children:[(0,l.jsx)("p",{className:"text-violet-100/80 text-lg font-bold leading-6 pb-3",children:"Sign up for our newsletter to stay updated!"}),(0,l.jsxs)("a",{href:"https://forms.gle/MsMYhqwyfc2pF4ze9",rel:"noopener noreferrer",target:"_blank",className:"flex items-center justify-center mt-5 px-6 py-3 w-full text-base duration-300 transition-all ease-in-out border-[1px] hover:border-purple-600/40 hover:shadow-[0_0_25px_-5px] hover:shadow-purple-600/10 border-slate-50/10 bg-gradient-to-br from-slate-50/[0.08] via-slate-50/[0.03] to-slate-50/[0.01] rounded-md backdrop-blur-lg focus:ring-2 focus:ring-offset-1 focus:ring-offset-purple-500/50 focus:ring-purple-600/70 text-violet-100/80 hover:text-purple-500 font-bold",children:["Sign up ",(0,l.jsx)(a.uFt,{className:"ml-1 inline"})]})," "]})]})]})]})})}}}]);