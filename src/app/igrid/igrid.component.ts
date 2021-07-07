import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FilterSettingsModel, GridComponent, IFilter, PageSettingsModel,
  SearchSettingsModel, ToolbarItems, EditService, CommandColumnService,
  CommandModel,
  ContextMenuService
} from '@syncfusion/ej2-angular-grids';

import { MenuItemModel, MenuEventArgs, ClickEventArgs } from '@syncfusion/ej2-navigations';


@Component({
  selector: 'app-igrid',
  templateUrl: './igrid.component.html',
  styleUrls: ['./igrid.component.scss'],
  providers: [
    EditService,
    CommandColumnService,
    ContextMenuService
  ]
})
export class IgridComponent implements OnInit {

  constructor() { }

  public data: object[];
  public pageSettings: PageSettingsModel;
  public customAttributes: object;
  @ViewChild('grid')
  public grid: GridComponent;
  public filterOptions: FilterSettingsModel;
  public filter: IFilter;
  public toolbarOptions: ToolbarItems[] | object;
  public searchOptions: SearchSettingsModel;
  @ViewChild('grid') public gridObj: GridComponent;
  public commands: CommandModel[];
  public isCommandClick = false;
  public editSettings: object;
  public editparams: object;
  public menuItems: MenuItemModel[] = [
    {
      text: 'Approve'
    },
    {
      text: 'Reject'
    },
    {
      text: 'More Info'
    }];

  ngOnInit(): void {
    const gData = [
      [
        {
          app_id: 15086,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'desc',
          app_name: '1312A',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-30T09:15:49.200+00:00',
          attestation_lvl: 'completed with no warnings',
          attestation_date: '2021-06-30T09:15:49.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: '9cf69fbb-3ddb-4f10-9f25-0048d69645ea',
          privatepolicy_url: null,
          appipaddress: '198.203.181.181:25432'
        },
        {
          app_id: 1496,
          app_owner_fname: 'John',
          app_owner_lname: 'Moore',
          app_owner_email: 'Bpo9pqzBGH@email.com',
          app_desc: 'Used to check vital symptoms 252',
          app_name: '25285',
          app_status: 'Under Review',
          app_type: 'Patient',
          submissiondate: '2021-05-05T14:44:16.285+00:00',
          attestation_lvl: 'completed with risks',
          attestation_date: '2021-05-05T14:44:16.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '3091',
          organizationname: 'ORGNAME4953717012',
          client_id: 'b4dc0c76-4654-45ab-a651-f58d59b6e395',
          privatepolicy_url: 'http://view-attest-test.sdfgdf',
          appipaddress: null
        },
        {
          app_id: 14403,
          app_owner_fname: 'Kanika',
          app_owner_lname: 'Goyal',
          app_owner_email: 'kanika_goyal3@optum.com',
          app_desc: 'sf',
          app_name: 'a1',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-22T14:44:07.139+00:00',
          attestation_lvl: 'completed with risks',
          attestation_date: '2021-06-22T14:44:07.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '5715',
          organizationname: 'UHG',
          client_id: '6da6de48-dd3b-442a-bfc1-8e51efe588a7',
          privatepolicy_url: null,
          appipaddress: '198.203.177.177:43814'
        },
        {
          app_id: 10409,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'https://jj.com',
          app_name: 'A11212',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-04T11:40:09.133+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-04T11:40:10.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: 'b861941a-ea3e-4191-8ca8-384e8e182839',
          privatepolicy_url: 'http://test.com',
          appipaddress: null
        },
        {
          app_id: 10221,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'https://jj.com',
          app_name: 'A12',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-04T09:10:34.864+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-04T09:10:35.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: 'cd5641c3-a7a5-40e1-9dec-c4320afb16e2',
          privatepolicy_url: null,
          appipaddress: null
        },
        {
          app_id: 13585,
          app_owner_fname: 'Priti',
          app_owner_lname: 'Kashyap',
          app_owner_email: 'priti_99@optum.com',
          app_desc: 'A123',
          app_name: 'A123',
          app_status: 'Approved',
          app_type: 'Public,Patient',
          submissiondate: '2021-06-15T15:49:48.732+00:00',
          attestation_lvl: 'completed with risks',
          attestation_date: '2021-06-15T15:50:42.000+00:00',
          app_env: 'P',
          isblocked: true,
          organizationDetailKey: '20455',
          organizationname: 'Decimal',
          client_id: 'a38848bb-2707-4092-a277-836ab7f38e8e',
          privatepolicy_url: null,
          appipaddress: '198.203.177.177:2109'
        },
        {
          app_id: 10464,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'test description',
          app_name: 'A123',
          app_status: 'Approved',
          app_type: 'Public,Patient',
          submissiondate: '2021-06-04T12:48:05.230+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-04T12:48:07.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: 'e52ce6c7-2bc7-43f6-b0a6-65accbb9b8ed',
          privatepolicy_url: '',
          appipaddress: null
        },
        {
          app_id: 13383,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'aaaa',
          app_name: 'aaaa',
          app_status: 'Under Review',
          app_type: 'Public,Patient',
          submissiondate: '2021-06-15T06:05:36.926+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-17T08:44:31.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: '94d1d439-1983-42ed-ae83-5e0f7e5d105e',
          privatepolicy_url: null,
          appipaddress: null
        },
        {
          app_id: 13403,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'httpa://hh.com',
          app_name: 'aaaaa',
          app_status: 'Under Review',
          app_type: 'Public,Patient',
          submissiondate: '2021-06-15T07:53:40.539+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-18T06:19:16.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: '99b05a4e-6c73-411d-a0a5-bfc6c0f41ef0',
          privatepolicy_url: null,
          appipaddress: null
        },
        {
          app_id: 13990,
          app_owner_fname: 'Priti',
          app_owner_lname: 'Kashyap',
          app_owner_email: 'priti_99@optum.com',
          app_desc: 'aaaaap',
          app_name: 'aaaaap',
          app_status: 'Approved',
          app_type: 'Public,Patient',
          submissiondate: '2021-06-17T13:41:42.185+00:00',
          attestation_lvl: 'completed with risks',
          attestation_date: '2021-06-17T13:41:42.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '20455',
          organizationname: 'Decimal',
          client_id: 'b1da18dd-0ba6-4a11-846d-238c0551dadf',
          privatepolicy_url: null,
          appipaddress: '198.203.177.177:41813'
        },
        {
          app_id: 15086,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'desc',
          app_name: '1312A',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-30T09:15:49.200+00:00',
          attestation_lvl: 'completed with no warnings',
          attestation_date: '2021-06-30T09:15:49.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: '9cf69fbb-3ddb-4f10-9f25-0048d69645ea',
          privatepolicy_url: null,
          appipaddress: '198.203.181.181:25432'
        },
        {
          app_id: 1496,
          app_owner_fname: 'John',
          app_owner_lname: 'Moore',
          app_owner_email: 'Bpo9pqzBGH@email.com',
          app_desc: 'Used to check vital symptoms 252',
          app_name: '25285',
          app_status: 'Under Review',
          app_type: 'Patient',
          submissiondate: '2021-05-05T14:44:16.285+00:00',
          attestation_lvl: 'completed with risks',
          attestation_date: '2021-05-05T14:44:16.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '3091',
          organizationname: 'ORGNAME4953717012',
          client_id: 'b4dc0c76-4654-45ab-a651-f58d59b6e395',
          privatepolicy_url: 'http://view-attest-test.sdfgdf',
          appipaddress: null
        },
        {
          app_id: 14403,
          app_owner_fname: 'Kanika',
          app_owner_lname: 'Goyal',
          app_owner_email: 'kanika_goyal3@optum.com',
          app_desc: 'sf',
          app_name: 'a1',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-22T14:44:07.139+00:00',
          attestation_lvl: 'completed with risks',
          attestation_date: '2021-06-22T14:44:07.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '5715',
          organizationname: 'UHG',
          client_id: '6da6de48-dd3b-442a-bfc1-8e51efe588a7',
          privatepolicy_url: null,
          appipaddress: '198.203.177.177:43814'
        },
        {
          app_id: 10409,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'https://jj.com',
          app_name: 'A11212',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-04T11:40:09.133+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-04T11:40:10.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: 'b861941a-ea3e-4191-8ca8-384e8e182839',
          privatepolicy_url: 'http://test.com',
          appipaddress: null
        },
        {
          app_id: 10221,
          app_owner_fname: 'Swati',
          app_owner_lname: 'Gupta',
          app_owner_email: 'swati_gupta29@optum.com',
          app_desc: 'https://jj.com',
          app_name: 'A12',
          app_status: 'Approved',
          app_type: 'Public',
          submissiondate: '2021-06-04T09:10:34.864+00:00',
          attestation_lvl: 'Incomplete',
          attestation_date: '2021-06-04T09:10:35.000+00:00',
          app_env: 'P',
          isblocked: false,
          organizationDetailKey: '1035',
          organizationname: 'Health Check1',
          client_id: 'cd5641c3-a7a5-40e1-9dec-c4320afb16e2',
          privatepolicy_url: null,
          appipaddress: null
        }
      ],

    ];
    this.data = JSON.parse(JSON.stringify(gData[0]));
    this.pageSettings = { pageSize: 10 };
    this.customAttributes = { class: 'customcss' };
    this.filterOptions = {
      type: 'Menu'
    };
    this.filter = {
      type: 'CheckBox'
    };
    this.searchOptions = { fields: ['app_name', 'organizationname', 'app_owner_fname'], operator: 'contains', key: '', ignoreCase: true };
/*     this.toolbarOptions = ['Search', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }];
 */ this.toolbarOptions = ['Search',
         { text: 'Clear', tooltipText: 'Clear', prefixIcon: 'e-expand', id: 'Click' }];
    this.commands = [
      { buttonOption: { iconCss: 'menuAction e-icons', cssClass: 'e-flat' } }
    ];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      allowEditOnDblClick: false
    };
    this.editparams = { params: { popupHeight: '300px' } };
  }
  show() {
    this.grid.columnChooserModule.openColumnChooser(0, 0); // give X and Y axis
  }
  clearSearch() {
    this.gridObj.searchSettings.key = '';
  }
  btnClick(appName: string) {
    debugger;
  }
  public itemSelect(args: MenuEventArgs): void {
    debugger;
  }

  public commandClick(args: any) {
    this.isCommandClick = true;
    (this.grid.contextMenuModule as any).element.ej2_instances[0].openMenu(
      null,
      null,
      (event as any).pageY,
      (event as any).pageX,
      event
    );
  }
  public rowSelected(args: any) {
    if (this.isCommandClick) {
      this.isCommandClick = false;
      args.cancel = true;
    }
  }
  clickHandler(args: ClickEventArgs): void {
    if (args.item.id === 'Click') {
      this.clearSearch();
    }
}

}
