/* 
 * Kuda includes a library and editor for authoring interactive 3D content for the web.
 * Copyright (C) 2011 SRI International.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms
 * of the GNU General Public License as published by the Free Software Foundation; either 
 * version 2 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; 
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, 
 * Boston, MA 02110-1301 USA.
 */

(function() {	
	
////////////////////////////////////////////////////////////////////////////////
//                     			   Initialization  		                      //
////////////////////////////////////////////////////////////////////////////////
 
	editor.tools = editor.tools || {};
	editor.tools.camera = editor.tools.camera || {};

 	editor.tools.camera.init = function() {
		var tabpane = editor.ui.getTabPane('Camera'),
			
			vptMdl = new editor.tools.ViewpointsModel(),
			vptView = new editor.tools.ViewpointsView(),
			vptCtr = new editor.tools.ViewpointsController();
		
	    vptCtr.setView(vptView);
	    vptCtr.setModel(vptMdl);
		
		tabpane.toolbar.add(vptView);
		var crvMdl = new editor.tools.CamCurveModel(),
			crvView = new editor.tools.CamCurveView(),
			crvCtr = new editor.tools.CamCurveController();
				
		crvCtr.setView(crvView);
		crvCtr.setModel(crvMdl);
	
		tabpane.toolbar.add(crvView);
	};
	
////////////////////////////////////////////////////////////////////////////////
//                     			  	Extra Scripts  		                      //
////////////////////////////////////////////////////////////////////////////////

	editor.getScript('js/editor/plugins/camera/js/viewpoints.js');
	editor.getScript('js/editor/plugins/camera/js/cameraCurves.js');
})();