import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//Funtional Components
export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch']);
   /* const handleAdd = ()=> {
        const newCategory = 'Hunter X';
        setcategories([...categories, newCategory]);
        //setcategories(cats => [...categories, newCategory]); //Esto es con un callback
    } */
    

    return (
        <> 
                <h2>Gift App</h2>
                <AddCategory setCategories={setCategories}/>
                 <hr/> 
                 
                 <ol>
                    {
                        categories.map(category => (
                            <GifGrid 
                                key={category}
                                category = {category}
                            
                            />
                        ))
                    }
                 </ol>
        </>
    );
}
