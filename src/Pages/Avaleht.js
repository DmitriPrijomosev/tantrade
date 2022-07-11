import '../App.css';
import background from "../Assets/Images/tantrade-avaleht.jpg";
import naturavita from "../Assets/Images/Naturavita-logo.png";
import cofesso from "../Assets/Images/Coffesso-logo.png";
import hyson from "../Assets/Images/Hyson-logo.png";
import thurson from "../Assets/Images/Thurson-logo.png";
import mayski from "../Assets/Images/Mayski-logo.png";
import richard from "../Assets/Images/Richard-logo.png";


function Avaleht() {
	return ( 
		<div>
			<div>
				<header className="header-avaleht" style={{backgroundImage: `url(${background})`,
				backgroundSize: 'cover',}}>
					<h1 className="H1-header-avaleht">Tantrade OÜ</h1>
					<h2 className="H2-header-avaleht">Naturavita, Empire Teas ja May-Foods tooted Eestis</h2>
					<div className='avaleht-buttons'>
						<button className='button'>E-pood ja kataloog</button>
						<button className='button'>Info hulgikliendile</button>
					</div>
				</header>
				<div className='block1'>
				<p className='H3'>MEIE USUME, ET IDEAALNE KVALITEET SAAB OLLA SOODNE</p>
				<p className='text'>Just seetõttu on meil hea meel pakkuda Teile vaid parimat ettevõttetelt Naturavita, Empire Teas ja MAY-Foods – maailma juhtivatelt teeturu liidritelt.</p>
				</div>
				<div className='main-link-list'>
				<div className='main-link'>
					<img src={naturavita} alt="" />
					<h2 className='H2'>Naturavita</h2>
					<p className='text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada era</p>

				</div>
				<div className='main-link'>
					<img src={cofesso} alt="" />
					<h2 className='H2'>Cofesso</h2>
					<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada era</p>

				</div>
				<div className='main-link'>
					<img src={richard} alt="" />
					<h2 className='H2'>Richard</h2>
					<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada era</p>
				</div>
			</div>
			<div className='main-link-list-2'>
				<div className='main-link'>
					<img src={hyson} alt="" />
					<h2 className='H2'>Hyson</h2>
					<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada era</p>
				</div>
				<div className='main-link'>
					<img src={thurson} alt="" />
					<h2 className='H2'>Thyrson</h2>
					<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada era</p>
				</div>
				<div className='main-link'>
					<img src={mayski} alt="" />
					<h2 className='H2'>Mayski</h2>
					<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada era</p>
					</div>
				
			</div>
			</div>
		</div>
	 );
}

export default Avaleht;