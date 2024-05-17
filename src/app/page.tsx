
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import { roboto_mono, pacifico, satisfy, rochester, allura, tangerine, sofia } from './fonts'
import { IconChevronsDown } from "@tabler/icons-react";


export default function Home() {
	return (
		<div className="relative z-10">
			<div className="h-[100vh] relative ">
				<div className={`text-center absolute text-[36px] sm:text-[64px] w-full flex flex-col items-center justify-center top-[50vh] -translate-y-1/2 ${pacifico.className}`}>
					<div>Hi. I'm Sathwik.</div>
					<div>A Software Developer.</div>
					<IconChevronsDown id="scroll-icon" className="w-8 sm:w-12 h-8 sm:h-12" stroke={2}/>
				</div>
			</div>
			<aside>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque, rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus inventore.</p>
				
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore? Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam necessitatibus quod natus, dolor laboriosam illo velit.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque, rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus inventore.</p>
				
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore? Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam necessitatibus quod natus, dolor laboriosam illo velit.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque, rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus inventore.</p>
				
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore? Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam necessitatibus quod natus, dolor laboriosam illo velit.</p>
			</aside>
			<main>
				<ul id="cards">
					<li className="card" id="card_1">
						<div className="card__content">
							<div>
								<h2>Card One</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p><a href="#top" className="btn btn--accent">Read more</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_2">
						<div className="card__content">
							<div>
								<h2>Card Two</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p><a href="#top" className="btn btn--accent">Read more</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_3">
						<div className="card__content">
							<div>
								<h2>Card Three</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p><a href="#top" className="btn btn--accent">Read more</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_4">
						<div className="card__content">
							<div>
								<h2>Card Four</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p><a href="#top" className="btn btn--accent">Read more</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
				</ul>
			</main>
		</div>
  );
}
