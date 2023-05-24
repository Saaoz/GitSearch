import React, { useState } from 'react';
import Header from '../../Components/Header';
import SearchBar from '../../Components/Searchbar';
import Card from '../../Components/Card';
import './index.css';

function Home() {
    const [searchError, setSearchError] = useState(false);
    const [userData, setUserData] = useState(null);
    

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://api.github.com/users/${query}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                setSearchError(null);
            } else {
                const errorData = await response.json();
                setSearchError(errorData.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <SearchBar onSearch={handleSearch} searchError={searchError} />
            {userData && <Card userData={userData} />}
        </>
    );
}

export default Home;

