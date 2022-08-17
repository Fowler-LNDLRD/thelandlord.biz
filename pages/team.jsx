import Link from 'next/link';
import HeadTag from '../components/HeadTag';
import teamMembers from '../data/team.json';

const Team = () => {
	return (
		<>
			<HeadTag title={`Team`} />
			<section className="page container">
				<h1 className="page-title text-center">Team</h1>
				<div className="page-desc page-desc-limit text-center">
					The Landlord has a multi skilled team of technology professionals and successful businesses owners. They bring a wealth of experience, endless energy, ambition
					and desire to the project.
				</div>

				<div className="row  justify-content-center">
					{teamMembers.map((item, index) => (
						<div key={index} className="col-6 col-md-4 col-lg-3">
							<div className="team-item">
								<img className="team-img" src={`/files/img/team/${item.img ? item.name.toLowerCase() : 'default'}.jpg`} alt={item.name + ' - The Landlord'} />
								<h3 className="team-name">{item.name}</h3>
								<p className="team-title">{item.title}</p>

								<div className="team-social">
									{item.twitter && (
										<Link href={item.twitter}>
											<a className="team-link" target="_blank" rel="noreferrer">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
													<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
												</svg>
											</a>
										</Link>
									)}
									{item.linkedin && (
										<Link href={item.linkedin}>
											<a className="team-link" target="_blank" rel="noreferrer">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 14 14">
													<path d="M0.603938 4.80779H3.41678V13.2725H0.603938V4.80779ZM2.02919 0.727417C1.06647 0.727417 0.4375 1.35945 0.4375 2.18901C0.4375 3.00151 1.04806 3.65192 1.99237 3.65192H2.01031C2.99144 3.65192 3.60244 3.00148 3.60244 2.18901C3.58403 1.35945 2.99147 0.727417 2.02919 0.727417ZM10.3231 4.60895C8.83 4.60895 8.16109 5.4302 7.78794 6.00614V4.80779H4.97425C5.0115 5.60189 4.97425 13.2725 4.97425 13.2725H7.78794V8.54523C7.78794 8.29204 7.80634 8.03979 7.88037 7.85842C8.08409 7.35298 8.54703 6.82957 9.32356 6.82957C10.3424 6.82957 10.7493 7.60617 10.7493 8.74357V13.2725H13.5625V8.41867C13.5625 5.8187 12.1749 4.60895 10.3231 4.60895Z" />
												</svg>
											</a>
										</Link>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};
export default Team;
