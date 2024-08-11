import { CommonModule } from '@angular/common';
import { Component, ViewChildren } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuList: any = [
    {
      id: 1,
      name: "Introduction",
      children: [],
      path: "/introduction"
    },
    {
      id: 2,
      name: "System Requirements",
      children: [],
      path: "/systemrequirement"
    },
    {
      id: 3,
      name: "Browser Compatibility",
      children: [],
      path: 'browsercompatibility',

    },
    {
      id: 3,
      name: "NPM Packages",
      children: [],
      path: 'NPMPackages'
    },
    {
      id: 4,
      name: "API Reference",
      children: [],
      path: 'APIReference'
    },
    {
      id: 5,
      name: "Installation and Upgrade",
      children: [
        {
          id: 1, name: "Installation with NPM CLI",
          path: ""
        },
        {
          id: 2, name: "Download",
          path: "installation-and-upgrade/download"
        },
        {
          id: 3, name: "Install Using Web Installer",
          path: ""
        },
        {
          id: 4, name: "Install using the Offline Installer",
          path: ""
        },
        {
          id: 5, name: "Install using the Mac Installer",
          path: ""
        },
        {
          id: 6, name: " Installation Errors",
          path: ""
        },










      ],
      path: ''

    },
    {
      id: 5,
      name: "Linux Installer",
      children: [
        { id: 5.1, name: "How to Download" },
        { id: 5.2, name: "How to Install" },



      ]


    },
    {
      id: 6,
      name: "Licensing",
      children: [
        { id: 6, name: "Overview" },
        { id: 6, name: "Generating License Keys" },
        { id: 6, name: "Registering License Keys" },
        { id: 6, name: "Licensing Errors" },
        { id: 6, name: "Licensing FAQ" },
      ]
    }



  ]

}
