import React, { useEffect } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {categories} from '../methods/axiosRequests';
import {setCategory} from '../store/category';
import {useHistory} from "react-router-dom";
import "../styles/Categories.css"


   

const Dropdown = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [dropdownOpen, setOpen] = React.useState(false);
    
    const typeCategory = useSelector((state) => state.typeCategory)
    const toggle = () => setOpen(!dropdownOpen);

    const selectCategory = (category)=>{
        categories(category)
        .then(({data}) => {
            dispatch(setCategory(data))
        }) 
    }

    const categorias = [
        "All","Biography","Business","Childish","Classic Literature",
        "Comics","Cooking","Crime","Disease","Fantasy","Fiction","Graphic Novels",
        "Mystery","Reference","Science","Self-Help","Thriller"
    ]

    return(
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="" className="drop-color">
                Categories
                </DropdownToggle>
                <DropdownMenu className="categories">
                    {categorias.map(categoria => 
                    <DropdownItem onClick={() => selectCategory(categoria)} className="drop-color">
                        <Link className="categories" to={`/category/${categoria}`}>{categoria}</Link>
                    </DropdownItem>)}
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    )
}

export default Dropdown;