import React from 'react';
import Delete from '@material-ui/icons/Delete';
import './styles.css';

function DevItem({ dev, devRem }) {

	async function handleDevRem(e) {
		e.preventDefault();
		await devRem(dev);
	}

	return (
		<li className="dev-item">
			<header>
				<img src={dev.avatar_url} alt={dev.name} />
				<div className="user-info">
				<button onClick={handleDevRem}>
					<Delete></Delete>
				</button>
					<strong>{dev.name}</strong>
					<span>{dev.techs.join(', ')}</span>
				</div>
			</header>
			<p>{dev.bio}</p>
			<a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
		</li>
	)
}


export default DevItem;