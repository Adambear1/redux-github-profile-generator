import React from "react";

function Card({ email, phone, picture, name }) {
  const { large } = picture;
  const { title, first, last } = name;
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div class="card">
        <img src={large} alt="John" style="width:100%" />
        <h1>
          {title}. {first} {last}
        </h1>
        {/* <p class="title">CEO & Founder, Example</p>
        <p>Harvard University</p> */}
        <a href="#">
          <i class="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <p>
          <button>
            {email} - {phone}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Card;
