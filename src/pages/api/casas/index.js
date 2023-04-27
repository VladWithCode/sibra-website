const CasasService = {
	GET: (req, res) => {
		const casas = [
			{
				_id: 1,
				name: 'Casa en Valle del Sur',
				price: 380_000_00,
			},
			{
				_id: 2,
				name: 'Casa en Camino Real',
				price: 6_440_000_00,
			},
			{
				_id: 3,
				name: 'Casa en IV Centenario',
				price: 1_560_000_00,
			},
		];

		return res.json(casas);
	},
	POST: (req, res) => {},
	PUT: (req, res) => {},
	DELETE: (req, res) => {},
};

export default function CasasHandler(req, res) {
	const method = req.method;

	const handler = CasasService[method];

	if (!handler)
		return res.status(404).json({
			message: `[${method}] /casas no fue encontrado`,
		});

	return handler(req, res);
}
