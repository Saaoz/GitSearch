import React from 'react';
import './index.css';
import { icone, link, office, pointmap, twitter } from '../../assets/Imgs';

function Card({ userData }) {
    const {
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
        company,
    } = userData;

    return (
        <section className="card">
            <img src={icone} alt="profil-icone" />
            <div className="content-card">
                <div className="first-content">
                    <h1>{name}</h1>
                    <p>Joined {new Date(created_at).toLocaleDateString()}</p>
                </div>
                <h2 className="arobase">@{login}</h2>
                <p>{bio}</p>
                <div className="account-info">
                    <div className="stats">
                        <p>Repos</p>
                        <li>{public_repos}</li>
                    </div>
                    <div className="stats">
                        <p>Followers</p>
                        <li>{followers}</li>
                    </div>
                    <div className="stats">
                        <p>Following</p>
                        <li>{following}</li>
                    </div>
                </div>
                <div className="reseaux-list">
                    <div className="reseaux">
                        <img src={pointmap} alt="pointmapicon" />
                        <p>{location || 'Not available'}</p>
                    </div>
                    <div className="reseaux">
                        <img src={twitter} alt="twittericon" />
                        <p>{twitter_username || 'Not available'}</p>
                    </div>
                    <div className="reseaux">
                        <img src={link} alt="linkicon" />
                        <p>{blog || 'Not available'}</p>
                    </div>
                    <div className="reseaux">
                        <img src={office} alt="Officeicon" />
                        <p>{company || 'Not available'}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;