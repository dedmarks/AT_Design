import React from 'react'

const Box = () => {
  return (
    <div className="Box">
        <div className="left_line"/>
        <div className="row">
            <h1 className="top_txt">Stworzymy towją przetrzeń</h1>
            <h1 className="main_txt">Projektowanie<br />Wnętrz</h1>
            <div className="txt_container">
            <img className="arrow_down" src="https://static.thenounproject.com/png/1512370-200.png"/>
                <h3 className="sub_txt">Portfolio</h3>
            </div>
        </div>
        <div className="right_box">
            <h1 className="l">01</h1>
        <div className="txt_container1">
            <h1 className="contact_txt">Kontakt</h1>
            <img className="arrow_right" src="https://static.thenounproject.com/png/1512370-200.png"/>
            </div>
        </div>
    </div>
  )
}

export default Box