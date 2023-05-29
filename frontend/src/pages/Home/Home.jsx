import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";
import Helmet from 'react-helmet'
import axios from 'axios'
import { Toaster , toast } from 'react-hot-toast'

function Home() {
  const [data, setData] = useState([]);
  const [searchValue , setSearchValue] = useState([])
  const [dummy , setDummy] = useState(false)


  useEffect(() => {
    axios.get("http://localhost:4444/cards").then((res) => {
      setData(res.data);
    });
  }, [searchValue === "" , dummy? data : ""]);

  const handleSort = () => {
    const sorted = [...data].sort((a ,b) => a.price - b.price)
    setData(sorted)
  }

  return (
    <>
    <Helmet>
    <title>Home</title>
  </Helmet>
      <div className="hero">
        <div className="hero__left">
          <span>5 TO 9 MAY 2019, MARDAVALL HOTEL, NEW YORK</span>
          <h2>
            Change Your Mind <br /> To Become Sucess
          </h2>
          <button>But Ticket</button>
        </div>
        <div className="hero__right">
          <img
            src="https://preview.colorlib.com/theme/manup/img/hero-right.png"
            alt=""
          />
        </div>
      </div>

      <div className="counter">
        <div className="counter__left">
          <span>Conference Date</span>
          <h3>
            Count Every Second <br />
            Until the Event
          </h3>
        </div>

        <div className="counter__right">
          <div className="sec">
            <span>30</span>
            <p>Days</p>
          </div>
          <div className="sec">
            <span>08</span>
            <p>Hours</p>
          </div>
          <div className="sec">
            <span>32</span>
            <p>Min</p>
          </div>
          <div className="sec">
            <span>12</span>
            <p>Sec</p>
          </div>
        </div>
      </div>

      <div className="about">
        <img
          src="	https://preview.colorlib.com/theme/manup/img/h-about.jpg"
          alt=""
        />
        <div className="about__text">
          <h2>About Conference</h2>
          <p>
            When I first got into the online advertising business, I was looking
            for the magical combination that would put my website into the top
            search engine rankings, catapult me to the forefront of the minds or
            individuals looking to buy my product, and generally make me rich
            beyond my wildest dreams! After succeeding in the business for this
            long, I’m able to look back on my old self with this kind of
            thinking and shake my head.
          </p>
          <ul>
            <li>Write On Your Business Card</li>
            <li>Write On Your Business Card</li>
            <li>Write On Your Business Card</li>
            <li>Write On Your Business Card</li>
          </ul>
          <Link>Discover Now</Link>
        </div>
      </div>

      <div className="members">
        <h2>Who’s speaking</h2>
        <p>These are our communicators, you can see each person information</p>

        <div className="members__sec">
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-4.jpg"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-5.jpg"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-4.jpg"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-4.jpg"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-2.jpg.webp"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-2.jpg.webp"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-4.jpg"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-4.jpg"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-2.jpg.webp"
              alt=""
            />
          </div>
          <div className="member">
            <img
              src="https://preview.colorlib.com/theme/manup/img/team-member/member-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* datas from backend */}

      <div className="news">
        <h2>Latest News</h2>
        <p>Do not miss thing topic abput the event</p>
        <div className="actions">
          <button onClick={handleSort}>SORT</button>
          <input type="text" placeholder="Search..." onChange={(e) => {
            setSearchValue(e.target.value)
            setData(data.filter(item => item.content.includes(searchValue)))
          }}/>
        </div>
        <div className="news__datas">
          {
           data && data.map((item, index) => {
            return (
              <div className="data" key={index}>
                <div className="data__wrapper">
                  <Link title="Go to Detail Page" to={`${item._id}`}>
                    {item.content}
                  </Link>
                  <span>
                    <GoClock className="clock" />
                    ${item.price}
                  </span>
                  <div className="btn">
                    <button onClick={(e) => {
                        axios.delete(`http://localhost:4444/cards/${item._id}`).then(res => {
                          toast('Card has been deleted', {
                            icon: '👏',
                          });
                          setDummy(true)
                        })
                      }}>Delete</button>
                    <button>Add</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* end */}

      <div className="contact">
        <div className="contact__left">
          <h2>Location</h2>
          <p>Get directions to our event center</p>
          <span>Address:</span>
          <p>01 Pascale Springs Apt. 339, NY City United State</p>
          <ul>
            <li>
              <span>
                Phone: <br />
                (+12)-345-67-8910
              </span>
            </li>
            <li>
              <span>
                Email: <br />
                info.colorlib@gmail.com
              </span>
            </li>
          </ul>

          <span>Website:</span>
          <p>https://conference.colorlib.com</p>
        </div>
        <div className="location__right">
          <img src="https://i.stack.imgur.com/yZKgB.png" alt="img" />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Home;
