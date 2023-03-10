import React, {useEffect} from "react";
import "./App.css";
import {NavLink, Route, Routes, useSearchParams} from "react-router-dom";

export const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams() /*работает с "квери" параметрами*/

    console.log(searchParams.get("name"))  /*дай нам содержимое переменной name - "переменная", что приписывается в адресной строки url*/

    /*-- эта запись чтобы в консоле посмотреть что внутри searchParams находится*/
    console.log(Object.fromEntries(searchParams))  /*предыдущее значение - js объект*/


    useEffect(() => {
        console.log("research...")
    }, [searchParams])

    return (
        <div>
            profile
            <button onClick={() => {
                // чтобы изменить по клику - добавить другие переменные -вызываем setSearchParams и передаем объект туда где все свойства должны быть string
                setSearchParams({age: "32"})  /*устанавливаем новую "квери" переменную : name в url строке перезапишется на age=32, значение = всегда в виде строки*/
                // чтобы не стирать предыдущие значения из строки 11 сюда можем дописать через деструктуризацию новое значение
                setSearchParams({...Object.fromEntries(searchParams), age: "32"})  /*предыдущее значение в url сохранится name и через "слеш" новое свойство age=32*/
            }}>add age</button>
        </div>
    )
};

function App() {
    return (
        <div className="App">
            {/*чтобы могли переходить на эти страницы*/}
            <NavLink to={"/"}> main</NavLink>
            <NavLink to={"/login"}> login</NavLink>
            <NavLink to={"/profile"}> profile</NavLink>
            <NavLink
                to={"/profile/settings"}> settings/1</NavLink> {/*"NavLink" - это ссылка на которую можно вешать стили style className*/}

            <Routes>
                <Route path={"/*"} element={<div>404</div>}/>
                <Route path={"/"} element={<div>main</div>}/>
                <Route path={"/login"} element={<div>login</div>}/> {/*Роут - это страница*/}
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/profile/settings"} element={<div>settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;
// квери параметры - значит после слеша можем хранить не только id но и переменные например profile/family=alex - таким образом в урле хранятся значения
/*

searchParams - работает примерно как useState() - если хотим получить какое то значение говорим searchParams.get('name')

searchParams - это адресная строка url setSearchParams - обновляет searchParams - устанавливает объект - работате с формой, инпутом, текстареа
* - звездочка означает если страница никакая не найдена
параметры поиска - это все что идет после ? знака в поисковой строке
exact - стоит по умолчанию теперь нет такого параметра в 6 версии
Outlet - куда иы хотим вставить все остальное - организуется за счет вложенных Роутов внутри <Route> </Route> - дочерние элементы
класс active добавляется к style className это может менять настраивать
 */