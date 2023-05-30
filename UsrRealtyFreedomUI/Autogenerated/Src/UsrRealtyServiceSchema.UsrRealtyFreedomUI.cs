﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyServiceSchema

	/// <exclude/>
	public class UsrRealtyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyServiceSchema(UsrRealtyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("20eb241b-abac-44d3-9714-94b8fbb44c72");
			Name = "UsrRealtyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("df5e56ac-ac44-450a-ace8-ec50b3bf470a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,83,203,110,219,48,16,60,43,95,193,234,36,3,174,208,94,155,166,128,221,56,129,91,36,14,34,27,62,24,61,208,210,218,33,202,135,66,46,211,8,77,254,61,75,137,113,229,54,117,17,160,7,61,184,59,28,206,14,119,153,230,10,92,205,75,96,115,176,150,59,179,193,252,179,209,27,177,245,150,163,48,250,232,231,81,226,157,208,91,86,52,14,65,229,5,216,59,81,194,133,169,64,30,31,200,229,75,88,31,204,143,74,20,119,237,25,59,88,95,131,133,252,116,252,66,134,104,41,171,84,111,91,199,254,251,97,1,88,128,115,116,64,129,28,129,242,171,40,128,42,68,203,75,252,70,161,145,171,47,1,137,177,38,45,107,33,5,54,215,112,235,133,5,5,26,93,214,95,4,225,236,132,253,99,75,64,229,49,80,13,232,140,218,175,165,40,89,41,185,115,236,26,184,196,38,10,97,31,216,152,59,136,171,33,155,82,182,154,105,217,244,133,31,37,116,7,201,106,86,67,119,37,61,245,201,138,170,156,234,59,243,29,178,11,192,27,83,145,188,244,106,86,204,211,33,27,155,170,41,176,145,65,50,193,46,136,146,111,97,23,205,151,150,215,53,84,67,162,73,130,92,112,120,102,172,226,184,135,239,66,249,23,103,244,144,196,187,218,104,7,135,113,84,51,113,198,170,43,40,133,226,146,157,3,206,13,114,57,82,198,107,28,55,243,166,134,105,149,57,180,225,206,108,235,74,23,27,178,189,224,108,179,1,27,51,65,106,76,146,211,228,251,37,245,239,128,162,193,161,68,108,88,228,203,167,238,210,75,57,179,19,85,99,147,245,217,7,236,225,129,29,64,245,142,11,196,73,242,55,120,79,64,11,108,37,36,22,208,91,205,222,190,63,14,203,199,240,122,118,192,130,243,50,152,246,174,205,21,32,161,68,230,186,207,9,211,240,131,117,177,108,225,192,210,45,107,250,167,251,238,100,80,211,75,175,116,118,230,117,153,23,94,101,233,194,217,43,75,109,179,40,78,211,65,4,157,89,163,178,125,107,40,186,188,1,11,237,134,174,176,116,64,181,76,110,61,151,89,199,154,95,113,75,112,4,155,5,25,231,94,84,251,166,61,243,143,116,213,242,244,92,122,5,89,223,219,200,200,93,44,186,245,100,103,81,231,74,62,185,135,210,35,20,37,151,220,126,140,70,126,202,6,17,220,90,221,237,249,101,247,203,131,242,231,164,208,160,80,79,190,114,78,254,255,164,16,101,120,226,180,196,230,38,97,147,123,174,106,9,217,174,187,119,5,167,179,175,111,210,80,111,40,183,253,60,62,1,11,220,25,160,200,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("20eb241b-abac-44d3-9714-94b8fbb44c72"));
		}

		#endregion

	}

	#endregion

}
