'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json")

		, gruntOptions : {
			banner: "/*\n\t<%= pkg.name %>\n\t@version <%= pkg.version %>\n\t@author <%= pkg.author %>\n\t@homepage: <%= pkg.homepage %>\n\t@date <%= grunt.template.today('dd/mm/yyyy') %>\n*/\n"
		}

		, path : {
			parent : "."
			, js : {
				src : {
					main : "<%= path.parent %>/source"
				}
				, build : ["<%= path.parent %>"]
			}
		}

		, jshint: {
      		files: ["<%= path.js.src.main %>/*.js"]
      		, options: {
      			laxcomma: true
		        , globals: {
			      	jQuery: true
			      	, console: true
			      	, module: true
			      	, document: true

		        }
	      	}
	    }

	    , concat: {
	    	options: {
	    		stripBanners : true
       			, banner: "<%= gruntOptions.banner %>"
       			, process: function(src, filepath) {
         			return '\n\n// Source: ' + filepath + '\n\n' + src;
      			}
	    	}

	    	, dist: {
	    		src : ["<%= jshint.files %>"]
	    		, dest : "<%= path.js.build %>/<%= pkg.name %>.js"
      		}
    	}

	    , uglify: {
      		options: {
        		banner: "<%= gruntOptions.banner %>"
        		, preserveComments: false
        		, mangle: {
        			except: ['jQuery']
        		}
      		}
      		, dist: {
        		files: {
          			"<%= path.js.build %>/<%= pkg.name %>.min.js": ['<%= concat.dist.dest %>']
        		}
      		}
   		}

		, watch : {
			scripts : {
				files : ["<%= jshint.files %>"]
				, tasks : [ "bump:patch", "jshint" , "concat" ]
			}
				
		}

		, bump: {
		  	options: {
			    files: ['package.json']
			    , updateConfigs: ['pkg']
			    , commit: false
			    , createTag: false
			    , push: false
		  	}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask('default', [ "bump:major", "jshint", "concat", "uglify"]);
	
};