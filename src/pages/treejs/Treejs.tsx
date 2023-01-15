import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};

const markdownTreejs = `
### **TreeJs**

Treejs is a open source library that help render 3d graphics in js.
It a really primitive library that use WebGL.

It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.

`;

const markdownVocabulary = `
### **Grossaire**

#### **Mesh**
<a href="https://threejs.org/docs/#api/en/materials/MeshBasicMaterial"><b>MeshBasicMaterial</b></a>
A material for drawing geometries in a simple shaded (flat or wireframe) way.

This material is not affected by lights.

<a href="https://threejs.org/docs/#api/en/materials/MeshStandardMaterial"><b>MeshStandardMaterial</b></a>

A standard physically based material, using Metallic-Roughness workflow.

Physically based rendering (PBR) has recently become the standard in many 3D applications.

This approach differs from older approaches in that instead of using approximations for the way in which light interacts with a surface, a physically correct model is used. 

The idea is that, instead of tweaking materials to look good under specific lighting, a material can be created that will react 'correctly' under all lighting scenarios.

In practice this gives a more accurate and realistic looking result than the MeshLambertMaterial or MeshPhongMaterial, at the cost of being somewhat more computationally expensive.

Shading is calculated in the same way as for the MeshPhongMaterial, using a Phong shading model. This calculates shading per pixel (i.e. in the fragment shader, AKA pixel shader) which gives more accurate results than the Gouraud model used by MeshLambertMaterial, at the cost of some performance.

<a href="https://threejs.org/docs/#api/en/materials/MeshPhongMaterial"><b>MeshPhongMaterial</b></a>

A material for shiny surfaces with specular highlights.

The material uses a non-physically based Blinn-Phong model for calculating reflectance. Unlike the Lambertian model used in the MeshLambertMaterial this can simulate shiny surfaces with specular highlights (such as varnished wood).

Shading is calculated using a Phong shading model. This calculates shading per pixel (i.e. in the fragment shader, AKA pixel shader) which gives more accurate results than the Gouraud model used by MeshLambertMaterial, at the cost of some performance. The MeshStandardMaterial and MeshPhysicalMaterial also use this shading model.

Performance will generally be greater when using this material over the MeshStandardMaterial or MeshPhysicalMaterial, at the cost of some graphical accuracy.


<a href="https://threejs.org/docs/#api/en/lights/HemisphereLight"><b>HemisphereLight</b></a>
A light source positioned directly above the scene, with color fading from the sky color to the ground color.

This light cannot be used to cast shadows.

`;

const TreeJs: React.FC<Props> = () => {
  return (
    <div>
      <div className="card">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownTreejs}
        </ReactMarkdown>
      </div>
      <div className="card">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownVocabulary}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default TreeJs;
