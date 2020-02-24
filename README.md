# Blazor POC

> Purpose

This is a simple little demonstration of how to use blazor to provide C# code to the client side. The intention is to prove that FluentValidation and other bits and pieces of C# code can be executed without an entire SPA bundled along with it.

> Disclaimer

Use at own risk. This POC was valid on the date of publishing. There is no guarantee of the validity of the techniques used in this POC going forward nor does any code here, of course, reflect where Microsoft is going with Blazor.

> Intended use

There are essentially two elements to this repository. A server side solution and a small react app created using create-react-app. The applications do not communicate at all. The purpose of this POC was just to provide an example.

> Important Note

Anyone looking at this code should realize that it will probably work fine when running locally. But there is an issue loading the web assembly resources. The default Blazor template emits some javascript into a file in the _framework folder after building. This javascript further loads other resources. We have had trouble with the relative paths used by the VS template. A simple global rename within the file resolved this but, as I am sure anyone reading this would agree, not the cleanest solution.

Anyway, the intent here was to prove a concept and act as a primer. Not to produce a fully working production system :)

## Server Solution and Projects

> BlazorPOCApi solution file

The solution file reflects how blazor was leveraged on another project. This solution file contains a 3 Web API projects and one class library project.

> BlazorPOCApi project

This Web API project was added to give some idea of how we arranged our solution in another project. Multiple Web API/MVC projects in a single solution.

> BlazorBoilerPlate project

This Blazor Web project was added to show the standard output when using the Blazor Web project template

> BlazorPOC project

This Blazor Web project demonstrates how we stripped the project to bare bones to facilitate only calls to C# from javascript. There are no client side components in the Blazor solution. Only invokeable C# code

> SomeDomain

This class library was put in to provide a simple example of some entity that might have fluent validations. This sample validation is used on the client side

## Small React client app

This project resides in the BlazorReactApp folder. Load this in VS Code or whatever you use, npm install and run. Click the button to invoke javascript and enjoy.

There are specifics about how web assembly resources are loaded. Have a look at the index.html file in the public folder for <script> tags that bring in the web assembly resources and note the _framework folder in the public folder. This is just a copy of the blazor project output folder of the same name (you should see this folder if you build the API solution and dig around the BlazorPOC bin folders. It is one of those javascript files where you might need to "fix" the relative paths to the rest of the web assembly resources it references.

Enjoy!!
