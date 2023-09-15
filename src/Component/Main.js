import React, { Component } from 'react'
import css from './style.module.css'

export default class Main extends Component {

    danhSachKinh = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        class: this.danhSachKinh[0]
    }

    buttonList = () => {
        return this.danhSachKinh.map((kinh) => {
            return <div className="col-3">
                <button onClick={() => {this.thayKinh(kinh)}} key={`kinh`+kinh.id}><img style={{ objectFit: "cover", width:100 }} src={kinh.url} alt="" /></button>
            </div>
            
        })
    }

    thayKinh = (kinh) =>{
        // console.log(kinh);
        let newClass = {
            class: kinh
        }
        this.setState(newClass);
    }


    render() {
        let {url,name,desc} = this.state.class;
        return (
            <div className='container w-50'>
                <div className='header'>
                    <h1>TRY CLASS APP ONLINE</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="./glassesImage/model.jpg" style={{ objectFit: "cover" }} classname="card-img-top" alt="..." />
                            <img className={css["position--class"]} src="" alt="" />
                            
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="./glassesImage/model.jpg" style={{ objectFit: "cover" }} className="card-img-top" alt="..." />
                            <img className={css["position--class"]} src={url} alt="" />
                            <div classname="card-body">
                                <h5 classname="card-title">{name}</h5>
                                <p classname="card-text">{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttonClass">
                    <div className="row">
                        {this.buttonList()}
                    </div>
                    
                </div>
            </div>
        )
    }
}
