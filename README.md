replaceText
===========

AL_replaceText is a [jQuery][jq] plugin created to simplify the use of default text in form fields for things like search, login fields, etc. 

Installation
------------

Drop `al_replacetext.js` into the directory with all the rest of your JavaScript assets. Make sure you include [jQuery][jq] beforehand.

To use, just select the `<input>` fields you wish to have default text and specify their `value=""`. For example...

	<input type="text" name="login" value="Username">
	<script>
		$('input[name="login"]').replaceText();
	</script>

Credits
-------

* [Mike Dombrowski][mike] - initial concept, functional implementation
* [Tom Scott][tom] - object-oriented implementation

License
-------

Copyright (c) 2011 A + L DESIGN, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[jq]: http://jquery.com
[a+l]: http://www.aplusldesign.com 
[mike]: mike@aplusldesign.com
[tom]: http://github.com/tubbo