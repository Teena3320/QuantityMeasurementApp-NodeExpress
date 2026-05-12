import Sequelize from 'sequelize';

export default function (sequelize, DataTypes) {
	return sequelize.define('conversions', {
		factor: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		from_unit_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'units',
				key: 'id'
			},
			unique: "ukcjeagjdsblao6pokakvypxakq"
		},
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		to_unit_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'units',
				key: 'id'
			},
			unique: "ukcjeagjdsblao6pokakvypxakq"
		},
		formula: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'conversions',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: "conversions_from_unit_id_to_unit_id_key",
				unique: true,
				fields: [
					{ name: "from_unit_id" },
					{ name: "to_unit_id" },
				]
			},
			{
				name: "conversions_pkey",
				unique: true,
				fields: [
					{ name: "id" },
				]
			},
			{
				name: "ukcjeagjdsblao6pokakvypxakq",
				unique: true,
				fields: [
					{ name: "from_unit_id" },
					{ name: "to_unit_id" },
				]
			},
		]
	});
};
