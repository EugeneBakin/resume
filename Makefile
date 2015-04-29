all: build/bakin-resume-ru.pdf build/bakin-resume-eng.pdf

build/bakin-resume-ru.pdf: resume/resume-ru.json templates/basic-html/template.html
	mkdir -p build
	node generator.js resume/resume-ru.json templates/basic-html/template.html
	wkhtmltopdf result.html ./build/bakin-resume-ru.pdf

build/bakin-resume-eng.pdf: resume/resume-eng.json templates/basic-html/template.html
	mkdir -p build
	node generator.js resume/resume-eng.json templates/basic-html/template.html
	wkhtmltopdf result.html ./build/bakin-resume-eng.pdf

clear: 
	rm -rf build
	rm result.html
