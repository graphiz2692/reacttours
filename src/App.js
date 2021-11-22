import React from "react";

import "./assets/styles/icon-font.css";
import "./assets/styles/style.css";

import Logo from "./assets/img/logo-white.png";
import Abt1 from "./assets/img/nat-1-large.jpg";
import Abt2 from "./assets/img/nat-2-large.jpg";
import Abt3 from "./assets/img/nat-3-large.jpg";

import Usr1 from "./assets/img/nat-8.jpg";
import Usr2 from "./assets/img/nat-9.jpg";

import Vid1 from './assets/img/video.mp4';
import Vid2 from './assets/img/video.webm';

const App = () => {
    return (
        <div>
            <header className="header">
                <div className="header__logo-box">
                    <img src={Logo} className="header__logo" alt="logo" />
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">outdoors</span>
                        <span className="heading-primary--sub">
                            is where life happens
                        </span>
                    </h1>
                    <a href="/" className="btn btn--white btn--animated">
                        Discouver Our Tours
                    </a>
                </div>
            </header>
            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting Tours for adventurous people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to falling in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Omnis sunt, cupiditate ad aut
                                repudiandae quod iusto porro libero facilis
                                excepturi dolores nesciunt error nemo. Iusto
                                expedita minus quo eveniet consectetur.
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live adventures like you have never before
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Omnis sunt, cupiditate ad aut
                                repudiandae quod iusto porro libero.
                            </p>
                            <a href="/" className="btn-text">
                                Learn More &rarr;
                            </a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img
                                    src={Abt1}
                                    alt=""
                                    className="composition__photo composition__photo--p1"
                                />
                                <img
                                    src={Abt2}
                                    alt=""
                                    className="composition__photo composition__photo--p2"
                                />
                                <img
                                    src={Abt3}
                                    alt=""
                                    className="composition__photo composition__photo--p3"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Explore The World
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Omnis sunt, cupiditate ad
                                    aut repudiandae
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-compass"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Meet The Nature
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Omnis sunt, cupiditate ad
                                    aut repudiandae
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Find your way
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Omnis sunt, cupiditate ad
                                    aut repudiandae
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-heart"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Live a healthier life
                                </h3>
                                <p className="feature-box__text">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Omnis sunt, cupiditate ad
                                    aut repudiandae
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Most Exciting Tours
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            The Sea Explorer
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 Day Tour</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in Cozy Hotels</li>
                                            <li>Difficulty: Easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-box">
                                                Only
                                            </p>
                                            <p className="card_price-value">
                                                $295
                                            </p>
                                        </div>
                                        <a href="/" className="btn btn--white">
                                            Book Now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            The Forest Hiker
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 Day Tour</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in Provided Tents</li>
                                            <li>Difficulty: Medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-box">
                                                Only
                                            </p>
                                            <p className="card_price-value">
                                                $495
                                            </p>
                                        </div>
                                        <a href="/" className="btn btn--white">
                                            Book Now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            The Snow Adventurer
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 Day Tour</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in Provided Tents</li>
                                            <li>Difficulty: Hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-box">
                                                Only
                                            </p>
                                            <p className="card_price-value">
                                                $895
                                            </p>
                                        </div>
                                        <a href="/" className="btn btn--white">
                                            Book Now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="u-center-text u-margin-top-huge">
                        <a href="/" className="btn btn--green">
                            Discover All Our Tours
                        </a>
                    </div>
                </section>

                <section className="section-stories">
                    <div className="bg-video">
                        <video
                            className="bg-video__content"
                            autoplay
                            loop
                            muted
                        >
                            <source src={Vid1} type="video/mp4" />
                            <source src={Vid2} type="video/webm" />
                            Your Browser is not Supported!!
                        </video>
                    </div>

                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            We make people genuinely happy
                        </h2>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img
                                    src={Usr1}
                                    alt="Person on a tour"
                                    className="story__img"
                                />
                                <figcaption className="story__caption">
                                    Mary Smith
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    I had the best week ever with my family
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iusto placeat deleniti
                                    culpa nisi adipisci dolorum odit reiciendis
                                    repellendus perferendis nostrum deserunt
                                    obcaecati!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img
                                    src={Usr2}
                                    alt="Person on a tour"
                                    className="story__img"
                                />
                                <figcaption className="story__caption">
                                    Jack Wilson
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    WOW! My Life is completely different now
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iusto placeat deleniti
                                    culpa nisi adipisci dolorum odit reiciendis
                                    repellendus perferendis nostrum deserunt
                                    obcaecati!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="u-center-text u-margin-top-huge">
                        <a href="/" className="btn-text">
                            Read All Stories &rarr;
                        </a>
                    </div>
                </section>

                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form action="#" className="form">
                                    <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">
                                            Start booking now
                                        </h2>
                                    </div>

                                    <div className="form__group">
                                        <input
                                            type="text"
                                            className="form__input"
                                            placeholder="Full name"
                                            id="name"
                                            required
                                        />
                                        <label
                                            for="name"
                                            className="form__label"
                                        >
                                            Full name
                                        </label>
                                    </div>

                                    <div className="form__group">
                                        <input
                                            type="email"
                                            className="form__input"
                                            placeholder="Email address"
                                            id="email"
                                            required
                                        />
                                        <label
                                            for="email"
                                            className="form__label"
                                        >
                                            Email address
                                        </label>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__radio-group">
                                            <input
                                                type="radio"
                                                className="form__radio-input"
                                                id="small"
                                                name="size"
                                            />
                                            <label
                                                for="small"
                                                className="form__radio-label"
                                            >
                                                <span className="form__radio-button"></span>
                                                Small tour group
                                            </label>
                                        </div>

                                        <div className="form__radio-group">
                                            <input
                                                type="radio"
                                                className="form__radio-input"
                                                id="large"
                                                name="size"
                                            />
                                            <label
                                                for="large"
                                                className="form__radio-label"
                                            >
                                                <span className="form__radio-button"></span>
                                                Large tour group
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
