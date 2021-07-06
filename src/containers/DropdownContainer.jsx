import React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { categories } from '../methods/axiosRequests';
import { setCategory } from '../store/category';
import "../styles/Categories.css"


   

const Dropdown = () => {
    const dispatch = useDispatch()
    const [dropdownOpen, setOpen] = React.useState(false);
    
    const toggle = () => setOpen(!dropdownOpen);

    const selectCategory = (category)=>{
        categories(category)
        .then(({data}) => {
            dispatch(setCategory(data))
        }) 
    }

    let categorias = [
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
                <DropdownMenu>
                    {categorias.map(categoria => 
                    <DropdownItem onClick={() => selectCategory(categoria)} className="drop-color">
                        <Link class="categories" to={`/category/${categoria}`}>{categoria}</Link>
                    </DropdownItem>)}
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    )
}

export default Dropdown;