# GraphFL

The term URI is a very general concept. However, as an endpoint in the web, URIs can be traditionally viewed from two perspectives.

First, there's the perspective that applies the concept of a URI as in a Linux File System. It is not surprising that traditional web servers like Apache handled URIs as files and folders. Restful API adopts this viewpoint.

Second, there's the perspective that adopts the concept of a URI as a Programming Identifier. Although this is a very useful perspective, it does not seem to be considered much. The concept of a RPCful API adopts this perspective on APIs.

GraphFL is designed with the objective of GraphQL in mind, from the perspective of a RPCful API. Simultaneously, GraphFL is designed to support serverless deployments from the OpenAPI Specification (OAS) perspective.