SHELL := /bin/bash
PATH  := node_modules/.bin:make/bin:$(PATH)

.PHONY: build watch

build: build/hsimp.jquery.min.js build/hsimp.jquery.css
watch: build .watch.ref

.watch.ref: src/hsimp.jquery.js src/hsimp.jquery.scss build/index.html
	touch .watch.ref
	@ chrome-canary-cli reload

build/hsimp.jquery.min.js: src/hsimp.jquery.js
	browserify src/hsimp.jquery.js | uglifyjs -m -c > build/hsimp.jquery.min.js

build/hsimp.jquery.css: src/hsimp.jquery.scss
	compass compile
