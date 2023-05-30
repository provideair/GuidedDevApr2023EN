define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrWebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_fsfb85o",
					"labelPosition": "above",
					"control": "$StringAttribute_fsfb85o",
					"multiline": false
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SubAccountTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_qfy54ck_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "goal-tab-icon"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_4lzmg05",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_4lzmg05_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "SubAccountTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wa6rgw6",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4lzmg05",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_qrvu0tx",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wa6rgw6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_25m28bz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_25m28bz_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrSubAccount"
						}
					}
				},
				"parentName": "FlexContainer_qrvu0tx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_9vqw86r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_9vqw86r_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_luuw2neDS"
						}
					}
				},
				"parentName": "FlexContainer_qrvu0tx",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_vfltcml",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_vfltcml_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_qrvu0tx",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_mmts9a9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_mmts9a9_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_luuw2ne"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_vfltcml",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_74hj7cn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_74hj7cn_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrSubAccount"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_vfltcml",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0o71rag",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0o71rag_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_luuw2ne"
					]
				},
				"parentName": "FlexContainer_qrvu0tx",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ya31tvc",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ya31tvc_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "#FD8701",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "ExpansionPanel_4lzmg05",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_g66guna",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_ya31tvc",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xrzljob",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_g66guna",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jfj8x13",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_ya31tvc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_2c3mnwq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4lzmg05",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_luuw2ne",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_luuw2ne",
					"primaryColumnName": "GridDetail_luuw2neDS_Id",
					"columns": [
						{
							"id": "7f3f3e4a-28b4-5696-0e27-d6e1b34e49f8",
							"code": "GridDetail_luuw2neDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_luuw2neDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "5dc7ad2d-2122-aa8a-fd61-caff6aa16e48",
							"code": "GridDetail_luuw2neDS_Id",
							"path": "Id",
							"caption": "#ResourceString(GridDetail_luuw2neDS_Id)#",
							"dataValueType": 0
						},
						{
							"id": "6c0b49fa-4191-f0c9-593e-41469dedbc87",
							"code": "GridDetail_luuw2neDS_ModifiedBy",
							"path": "ModifiedBy",
							"caption": "#ResourceString(GridDetail_luuw2neDS_ModifiedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "2fb5a746-0439-6bb0-2826-fb79774e5637",
							"code": "GridDetail_luuw2neDS_ModifiedOn",
							"path": "ModifiedOn",
							"caption": "#ResourceString(GridDetail_luuw2neDS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "2fda304f-eba9-f6df-98c6-b098b83eb8c2",
							"code": "GridDetail_luuw2neDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_luuw2neDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "17dc9765-6683-050d-70ed-f240ffe338c7",
							"code": "GridDetail_luuw2neDS_CreatedBy",
							"path": "CreatedBy",
							"caption": "#ResourceString(GridDetail_luuw2neDS_CreatedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_2c3mnwq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_y7j0app",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_y7j0app_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "SubAccountTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_wxdlbr8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_y7j0app",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_i2cjm29",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wxdlbr8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_gbzwqhz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_gbzwqhz_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrSubAccount"
						}
					}
				},
				"parentName": "FlexContainer_i2cjm29",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_omnm6pw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_omnm6pw_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_luuw2neDS"
						}
					}
				},
				"parentName": "FlexContainer_i2cjm29",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_zmmbbzc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_zmmbbzc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_i2cjm29",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_z6ci1tz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_z6ci1tz_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_luuw2ne"
						}
					}
				},
				"parentName": "Button_zmmbbzc",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_5etkd52",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_5etkd52_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrSubAccount"
						}
					}
				},
				"parentName": "Button_zmmbbzc",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_ysx94ir",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_ysx94ir_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_luuw2ne"
					]
				},
				"parentName": "FlexContainer_i2cjm29",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_z7941f0",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_z7941f0_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "#FD8701",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "ExpansionPanel_y7j0app",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_c8ynoly",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_z7941f0",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_euy7zmk",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_c8ynoly",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_byupn9d",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_z7941f0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vch1x78",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_y7j0app",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_y3yq30i",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_y3yq30i",
					"primaryColumnName": "DataGrid_y3yq30iDS_Id",
					"columns": [
						{
							"id": "7f3f3e4a-28b4-5696-0e27-d6e1b34e49f8",
							"code": "DataGrid_y3yq30iDS_CreatedBy",
							"caption": "#ResourceString(DataGrid_y3yq30iDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "5dc7ad2d-2122-aa8a-fd61-caff6aa16e48",
							"code": "DataGrid_y3yq30iDS_Id",
							"path": "Id",
							"caption": "#ResourceString(DataGrid_y3yq30iDS_Id)#",
							"dataValueType": 0
						},
						{
							"id": "6c0b49fa-4191-f0c9-593e-41469dedbc87",
							"code": "DataGrid_y3yq30iDS_ModifiedBy",
							"path": "ModifiedBy",
							"caption": "#ResourceString(DataGrid_y3yq30iDS_ModifiedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "2fb5a746-0439-6bb0-2826-fb79774e5637",
							"code": "DataGrid_y3yq30iDS_ModifiedOn",
							"path": "ModifiedOn",
							"caption": "#ResourceString(DataGrid_y3yq30iDS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "2fda304f-eba9-f6df-98c6-b098b83eb8c2",
							"code": "DataGrid_y3yq30iDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(DataGrid_y3yq30iDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "17dc9765-6683-050d-70ed-f240ffe338c7",
							"code": "DataGrid_y3yq30iDS_CreatedBy",
							"path": "CreatedBy",
							"caption": "#ResourceString(DataGrid_y3yq30iDS_CreatedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_vch1x78",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"GridDetail_luuw2ne": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_luuw2neDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "desc",
									"columnName": "Id"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_luuw2neDS_CreatedBy": {
								"modelConfig": {
									"path": "GridDetail_luuw2neDS.CreatedBy"
								}
							},
							"GridDetail_luuw2neDS_Id": {
								"modelConfig": {
									"path": "GridDetail_luuw2neDS.Id"
								}
							},
							"GridDetail_luuw2neDS_ModifiedBy": {
								"modelConfig": {
									"path": "GridDetail_luuw2neDS.ModifiedBy"
								}
							},
							"GridDetail_luuw2neDS_ModifiedOn": {
								"modelConfig": {
									"path": "GridDetail_luuw2neDS.ModifiedOn"
								}
							},
							"GridDetail_luuw2neDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_luuw2neDS.CreatedOn"
								}
							}
						}
					}
				},
				"DataGrid_y3yq30i": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_y3yq30iDS"
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_y3yq30iDS_CreatedBy": {
								"modelConfig": {
									"path": "DataGrid_y3yq30iDS.CreatedBy"
								}
							},
							"DataGrid_y3yq30iDS_Id": {
								"modelConfig": {
									"path": "DataGrid_y3yq30iDS.Id"
								}
							},
							"DataGrid_y3yq30iDS_ModifiedBy": {
								"modelConfig": {
									"path": "DataGrid_y3yq30iDS.ModifiedBy"
								}
							},
							"DataGrid_y3yq30iDS_ModifiedOn": {
								"modelConfig": {
									"path": "DataGrid_y3yq30iDS.ModifiedOn"
								}
							},
							"DataGrid_y3yq30iDS_CreatedOn": {
								"modelConfig": {
									"path": "DataGrid_y3yq30iDS.CreatedOn"
								}
							}
						}
					}
				},
				"StringAttribute_fsfb85o": {
					"modelConfig": {
						"path": "PDS.UsrWebsiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"GridDetail_luuw2neDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrSubAccount",
						"attributes": {
							"CreatedBy": {
								"path": "CreatedBy"
							},
							"Id": {
								"path": "Id"
							},
							"ModifiedBy": {
								"path": "ModifiedBy"
							},
							"ModifiedOn": {
								"path": "ModifiedOn"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				},
				"DataGrid_y3yq30iDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrSubAccount",
						"attributes": {
							"CreatedBy": {
								"path": "CreatedBy"
							},
							"Id": {
								"path": "Id"
							},
							"ModifiedBy": {
								"path": "ModifiedBy"
							},
							"ModifiedOn": {
								"path": "ModifiedOn"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});