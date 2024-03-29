const athletes = [
	{
		'id': 'neymar-jr',
		'known_as': 'Neymar',
		'description': 'Neymar da Silva Santos Júnior, born 5 February 1992),' + 
			' commonly known as Neymar or Neymar Jr., is a Brazilian professional ' + 
			'footballer who plays as a forward for Spanish club FC Barcelona and the ' + 
			'Brazil national team.',
		'name': 'Neymar Jr.',
		'country': 'bra',
		'birth': '1992',
		'height': 1.75,
		'active': true,
		'current_team': 'Barcelona',
		'position': 'Forward',
		'upvotes': 429,
		'image': 'neymar-jr.png',
		'cover': 'neymar-jr-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Neymar',
		'goals': 129,
		'subreddit': 'neymar',
		'honours': [
			{
				'team': 'Santos',
				'honours': [
					{ 'year': '2010', 'event': 'Campeonato Paulista' },
					{ 'year': '2011', 'event': 'Campeonato Paulista' },
					{ 'year': '2012', 'event': 'Campeonato Paulista' },
					{ 'year': '2011', 'event': 'Copa Libertadores' },
					{ 'year': '2012', 'event': 'Recopa Sudamericana 2012' }
				]
			},
			{
				'team': 'Barcelona',
				'honours': [
					{ 'year': '2014', 'event': 'La Liga' },
					{ 'year': '2015', 'event': 'La Liga' },
					{ 'year': '2013', 'event': 'Supercopa de España' },
					{ 'year': '2016', 'event': 'Supercopa de España' },
					{ 'year': '2014-15', 'event': 'UEFA Champions League' },
					{ 'year': '2015', 'event': 'UEFA Super Cup' },
					{ 'year': '2015', 'event': 'FIFA World Cup' }
				]
			},
			{
				'team': 'Individual',
				'honours': [
					{ 'year': '2011', 'event': 'World Soccer Young Player of The Year' },
					{ 'year': '2011', 'event': 'Campeonato Brasileiro - Best Player' },
					{ 'year': ['2010', '2011'], 'event': 'Brazilian Silver Ball' },
					{ 'year': '2011', 'event': 'Brazilian Golden Ball' },
					{ 'year': '2011', 'event': 'FIFA Puskás Award' },
					{ 'year': '2011', 'event': 'Copa Libertadores MVP' },
					{ 'year': '2014', 'event': 'FIFA World Cup Bronze Boot' },
					{ 'year': '2014', 'event': 'FIFA World Cup Dream Team' },
					{ 'year': ['2014', '2015'], 'event': 'Samba Gold' } 
				]
			},
			{
				'team': 'Records',
				'honours': [
					{ 'event': 'Copa do Brasil Top Scorer', 'year': '2010' },
					{ 'event': 'South American Youth Championship', 'year': '2011' },
					{ 'event': 'Campeonato Paulista Top Scorer', 'year': '2012' },
					{ 'event': 'Copa Libertadores Top Scorer', 'year': '2012' },
					{ 'event': 'UEFA Champions League Top Scorer', 'year': '2014-15' }
				]
			}
		],
		voted: false,
	},
	{
		'id': 'lionel-messi',
		'known_as': 'Messi',
		'name': 'Lionel Messi',
		'country': 'arg',
		'birth': '1987',
		'height': 1.70,
		'active': true,
		'current_team': 'Barcelona',
		'position': 'Forward',
		'upvotes': 698,
		'image': 'lionel-messi.jpg',
		'cover': 'lionel-messi-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Lionel_Messi',
		'goals': 723,
		'subreddit': 'messi',
		'honours': [
			{
				'team': 'Barcelona',
				'honours': [
					{ 'year': '2005', 'event': 'Supercopa de España' },
					{ 'year': '2006', 'event': 'Supercopa de España' },
					{ 'year': '2009', 'event': 'Supercopa de España' },
					{ 'year': '2009', 'event': 'FIFA WorldCup' },
					{ 'year': '2010', 'event': 'Supercopa de España' },
					{ 'year': '2013', 'event': 'Supercopa de España' },
					{ 'year': '2014', 'event': 'La Liga' },
					{ 'year': '2015', 'event': 'La Liga' },
					{ 'year': '2016', 'event': 'Supercopa de España' }
				]
			}

		],
		voted: false
	},
	{
		'id': 'zlatan-ibrahimovic',
		'known_as': 'Ibrahimović',
		'name': 'Zlatan Ibrahimović',
		'country': 'swt',
		'birth': '1981',
		'height': 1.95,
		'active': true,
		'current_team': 'Manchester United Football Club',
		'position': 'Forward',
		'upvotes': 476,
		'image': 'zlatan-ibrahimovic.jpg',
		'cover': 'zlatan-ibrahimovic-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Zlatan_Ibrahimović',
		'goals': 528,
		'subreddit': 'zlatan',
		'honours': [
			{
				'team': 'Ajax',
				'honours': [
					{ 'year': ['2001-02', '2003-04'], 'event': 'Eredivise' },
					{ 'year': '2001-02', 'event': 'KNVB Cup' },
					{ 'year': '2002', 'event': 'Johan Crujiff Schaal' },
					{ 'year': ['2001', '2002', '2003', '2004'], 'event': 'Amsterdam Tournament' }, 
				]
			},
			{
				'team': 'Juventus',
				'honours': [
					{ 'year': '2005', 'event': 'Joan Gamper' },
				]
			},
			{
				'team': 'Internazionale',
				'honours': [
					{ 'event': 'Serie A', 'year': ['2006-07', '2007-08', '2008-09'] },
					{ 'event': 'Supercoppa Italiana', 'year': ['2006', '2008'] },
					{ 'event': 'Eusébio Cup', 'year': '2008' }
				]
			},
			{
				'team': 'Barcelona',
				'honours': [
					{ 'event': 'La Liga', 'year': '2009-10' },
					{ 'event': 'Supercopa España', 'year': ['2009', '2010'] },
					{ 'event': 'UEFA Super Cup', 'year': '2009' },
					{ 'event': 'FIFA Club World Cup', 'year': '2009' }
				]
			},
			{
				'team': 'Milan',
				'honours': [
					{ 'event': 'Serie A', 'year': '2010-11' },
					{ 'event': 'Supercoppa Italiana', 'year': '2011' },
				]
			},
			{
				'team': 'Manchester United',
				'honours': [
					{ 'event': 'FA Community Shield', 'year': '2016' }
				]
			},
			{
				'team': 'Individual',
				'honours': [
					{ 'event': 'Swedish Football Personality of The Year', 'year': '2002' },
					{ 'event': 'Eurosport Goal of The Year', 'year': '2004' },
					{ 'event': 'UEFA Euro 2004 - Man of The Match', 'year': '2004' },
					{ 'event': 'Serie A Most Loved Player', 'year': '2005' },
					{ 'event': 'UEFA Euro 2008 - Man of The Match', 'year': '2008' },
					{ 'event': 'UEFA Euro 2012 - Man of The Match', 'year': '2012' },
					{ 'event': 'Swedish Male Athlete of The Year', 'year': ['2008', '2010', '2013', '2015'] }
				]
			}
		],
		voted: false
	},
	{
		'id': 'carlito-tevez',
		'known_as': 'Tevez',
		'name': 'Carlos Alberto Tevez',
		'country': 'arg',
		'birth': '1984',
		'height': 1.73,
		'active': true,
		'current_team': 'Shanghai Shenhua',
		'position': 'Forward',
		'upvotes': 321,
		'image': 'carlos-tevez.jpg',
		'cover': 'carlos-tevez-cover.png',
		'link': 'https://en.wikipedia.org/wiki/Carlos_Tevez',
		'subreddit': 'soccer',
		'goals': 243,
		'honours': [
			{
				'team': 'Boca Júniors',
				'honours': [
					{ 'year': '2003', 'event': 'Primeira División' },
					{ 'year': '2003', 'event': 'Copa Libertadores' },
					{ 'year': '2004', 'event': 'Copa Sudamericana' },
					{ 'year': '2003', 'event': 'Intercontinental Cup' },
					{ 'year': '2014-15', 'event': 'Copa Argentina' }
				]
			},
			{
				'team': 'Corinthians',
				'honours': [
					{ 'year': '2005', 'event': 'Campeonato Brasileiro Série A' }
				]
			},
			{
				'team': 'Manchester United',
				'honours': [
					{ 'year': ['2007-08', '2008-09'], 'event': 'Premier League' },
					{ 'year': '2008-09', 'event': 'Football League Cup' },
					{ 'year': '2007-08', 'event': 'UEFA Champions League' },
					{ 'year': '2008', 'event': 'FIFA World Cup' }
				]
			},
			{
				'team': 'Manchester City',
				'honours': [
					{ 'event': 'Premiere League', 'year': '2011-12' },
					{ 'event': 'FA Cup', 'year': '2010-11' },
					{ 'event': 'FA Community Shieald', 'year': '2012' } 
				]
			},
			{
				'team': 'Juventus',
				'honours': [
					{ 'event': 'Serie A', 'year': ['2013-14', '2014-15'] },
					{ 'event': 'Supercoppa Italiana', 'year': '2013' },
					{ 'event': 'Coppa Italia', 'year': '2014-15' } 
				]
			}
		],
		voted: false
	},
	{
		'id': 'pierre-aubameyang',
		'known_as': 'Aubameyang',
		'name': 'Pierre-Emerick Aubameyang',
		'country': 'fra',
		'birth': '1989',
		'height': 1.87,
		'active': true,
		'current_team': 'Borussia Dortmund',
		'position': 'Forward',
		'description': 'Pierre-Emerick Emiliano François Aubameyang born 18 June 1989 ' + 
			'is a French-born Gabonese professional footballer who plays for German club Borussia Dortmund and the Gabon national football team.',
		'upvotes': 387,
		'image': 'pierre-aubameyang.jpg',
		'cover': 'pierre-aubameyang-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Pierre-Emerick_Aubameyang',
		'goals': 161,
		'subreddit': 'borussiadortmund',
		'honours': [
			{
				'team': 'AS Saint-Étienne',
				'honours': [
					{ 'year': '2012-13', 'event': 'Coupe de La Ligue' }
				]
			},
			{
				'team': 'Borussia Dortmund',
				'honours': [
					{ 'year': ['2013', '2014'], 'event': 'DFL-SuperCup' },
				]
			}

		],
		voted: false
	},
	,
	{
		'id': 'thierry-henry',
		'known_as': 'Thierry Henry',
		'name': 'Thierry Daniel Henry',
		'country': 'fra',
		'birth': '1977',
		'height': 1.88,
		'active': false,
		'current_team': 'Inactive',
		'position': 'Forward',
		'upvotes': 174,
		'image': 'thierry-henry.png',
		'cover': 'thierry-henry-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Thierry_Henry',
		'goals': 161,
		'subreddit': 'soccer',
		'honours': [
			{
				'team': 'Arsenal',
				'honours': [
					{ 
						'year': ['2001-02', '2003-04'], 
						'event': 'Premier League' 
					},
					{ 
						'year': ['2001-02', '2002-03'], 
						'event': 'FA Cup' 
					},
					{
						'year': ['2002', '2004'],
						'event': 'FA Community Shield'
					}
				]
			},
			{
				'team': 'Barcelona',
				'honours': [
					{ 
						'year': ['2008-2009', '2009-10'], 
						'event': 'La Liga' 
					},
					{ 'year': '2008-09', 'event': 'Copa del Rey' },
					{ 'year': '2009', 'event': 'Supercopa de España' }
				]
			},
			{
				'team': 'New York Red Bulls',
				'honours': [
					{
						'year': '2013', 
						'event': 'MLS Supporters\'s Shield'
					}
				]
			}

		],
		voted: false
	}
];

module.exports = athletes;