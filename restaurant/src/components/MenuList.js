import { useState } from "react";
import '../components/MenuList.css';

const MenuList = () => {
    const menus = [
        { id: 1, name: '크리스피 베이크', img: 'food.jpeg', explanation: '한우 암소만을 사용하여 진하고 깔끔한 육수로 든든한 한끼를 책임지는', price: '9,500' },
        { id: 2, name: '크리스피 베이크', img: 'food.jpeg', explanation: '한우 암소만을 사용하여 진하고 깔끔한 육수로 든든한 한끼를 책임지는 어쩌고 저쩌고 어쩌고 저쩌고', price: '9,500' },
        { id: 3, name: '크리스피 베이크', img: 'food.jpeg', explanation: '한우 암소만을 사용하여 진하고 깔끔한 육수로 든든한 한끼를 책임지는 어쩌고 저쩌고 어쩌고 저쩌고', price: '9,500' },
        { id: 4, name: '크리스피 베이크', img: 'twosome.jpeg', explanation: '한우 암소만을 사용하여 진하고 깔끔한 육수로 든든한 한끼를 책임지는 어쩌고 저쩌고 어쩌고 저쩌고저쩌고저쩌고', price: '9,500' }
   
   
    ];

    return (
        <div className="menu-list">
            {menus.map(menu => (
                <div key={menu.id} className="menu-main-group">
                    <img alt="이미지 준비중" src={menu.img} className="menu-img" />
                    <div className="menu-group">
                        <div className="menu-name">{menu.name}</div>
                        <div className="menu-explanation">{menu.explanation.length > 70 ? menu.explanation.slice(0, 70) + ' ...' : menu.explanation}</div>
                        <div className="menu-price">{menu.price}{'원'}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;