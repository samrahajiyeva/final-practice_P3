import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import './Detail.scss'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams()
  const [item , setData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:4444/cards/${id}`).then(res => {
      setData(res.data)
    })
  } , [])

  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>

      <div className="detailnews__datas">
              <div className="data">
                <div className="data__wrapper">
                  <Link>
                    {item?.content}
                  </Link>
                  <span>
                    ${item?.price}
                  </span>
                </div>
              </div>
        </div>
    </>
  );
}

export default Detail;
