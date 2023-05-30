define("UsrRealtyClassic1Page", [], function() {
	return {
		entitySchemaName: "UsrRealtyClassic",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRealtyClassicFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRealtyClassic"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onMyButtonClick: function() {
				this.console.log("Classic UI button works..1.");
				var price = this.get("UsrPriceUSD");
				this.console.log("Price = " + price);
			}
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNamee38f3968-6a64-41d5-b21d-dd638a828491",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
            /* Metadata to add the custom button to the page. */
            {
                /*  Run the operation that inserts the element to the page. */
                "operation": "insert",
                /* The meta name of the parent container to add the button. */
                "parentName": "ProfileContainer",
                /* Add the button to the element collection of the parent element. */
                "propertyName": "items",
                /* The meta name of the added button. */
                "name": "MyButton",
                /* The properties to pass to the element’s constructor. */
                "values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
                    /* Set the type of the added element to ‘button.’ */
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    /* Bind the button title to the localizable schema string. */
                    "caption": {bindTo: "Resources.Strings.MyButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onMyButtonClick"},
                    /* Bind the button availability property. */
                    "enabled": true,
					"visible": true,
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE
                }
            },
			{
				"operation": "insert",
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0,
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"name": "Files",
				"values": {
					"itemType": Terrasoft.ViewItemType.DETAIL
				}
			},
			{
				"operation": "insert",
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"name": "NotesControlGroup",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTROL_GROUP,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": Terrasoft.DataValueType.TEXT,
					"contentType": Terrasoft.ContentType.RICH_TEXT,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
