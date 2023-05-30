define("UsrDecimalOutputClassicPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "NewTab1",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "FLOAT5a15ee27-2cd6-4e1d-af0a-0edadb785122",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "NewTab1GridLayout1"
					},
					"bindTo": "UsrFloat1",
					"enabled": false
				},
				"parentName": "NewTab1GridLayout1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGc96f4518-197a-462e-add6-7ea43bcf6785",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 3,
						"column": 0,
						"row": 1,
						"layoutName": "NewTab1GridLayout1"
					},
					"bindTo": "UsrString1",
					"enabled": false,
					"contentType": 0
				},
				"parentName": "NewTab1GridLayout1",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
