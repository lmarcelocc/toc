import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { SlugifyPipe } from '../_pipes';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'dashboard'.
   */
  selector: 'dashboard',  // <dashboard></dashboard>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './dashboard.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  public title = 'Hello and thank you!';

  public categories;

  public ngOnInit() {


    this.categories = [
      {
        "id": 1,
        "category_id": null,
        "created_at": "2018-01-04 10:48:34",
        "updated_at": "2018-01-04 10:48:34",
        "deleted_at": null,
        "name": "My data"
      },
      {
        "id": 2,
        "category_id": null,
        "created_at": "2018-01-04 10:48:34",
        "updated_at": "2018-01-04 10:48:34",
        "deleted_at": null,
        "name": "Your Principles"
      },
      {
        "id": 3,
        "category_id": null,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Your controller"
      },
      {
        "id": 4,
        "category_id": null,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Pizza processor"
      },
      {
        "id": 5,
        "category_id": null,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Individual piece of pizza"
      },
      {
        "id": 6,
        "category_id": null,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Dominos"
      },
      {
        "id": 7,
        "category_id": null,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Secure your pizza"
      },
      {
        "id": 8,
        "category_id": null,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Transfers your pizza"
      },
      {
        "id": 9,
        "category_id": 3,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Categories of pizza"
      },
      {
        "id": 10,
        "category_id": 1,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Lorem ipsum"
      },
      {
        "id": 11,
        "category_id": 1,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Subcategory hello my friend"
      },
      {
        "id": 12,
        "category_id": 3,
        "created_at": "2018-01-04 10:48:35",
        "updated_at": "2018-01-04 10:48:35",
        "deleted_at": null,
        "name": "Recipients of My data"
      }
    ];

    let dataToMerge = {
          "id": 1,
          "category_id": null,
          "created_at": "2018-01-04 10:48:34",
          "updated_at": "2018-01-04 10:48:34",
          "deleted_at": null,
          "sub_categories": [{
            "id": 10,
            "category_id": 1,
            "created_at": "2018-01-04 10:48:35",
            "updated_at": "2018-01-04 10:48:35",
            "deleted_at": null,
            "questions": [{
              "id": 226,
              "questionnaire_type_id": 3,
              "next_question_id": 227,
              "category_id": 10,
              "department_id": 4,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 676,
                "question_id": 226,
                "action_id": 50,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [{
                  "id": 230,
                  "questionnaire_type_id": 2,
                  "next_question_id": 231,
                  "category_id": 10,
                  "department_id": 5,
                  "scorable": 0,
                  "comments": null,
                  "created_at": "2018-01-04 10:48:42",
                  "updated_at": "2018-01-04 10:48:46",
                  "deleted_at": null,
                  "context": "Rerum itaque.",
                  "question": "Doloribus tenetur quasi ut qui quas recusandae enim non qui beatae."
                }],
                "answer": "Rerum modi molestias tempore."
              }, {
                "id": 677,
                "question_id": 226,
                "action_id": 24,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [{
                  "id": 231,
                  "questionnaire_type_id": 2,
                  "next_question_id": 232,
                  "category_id": 10,
                  "department_id": 1,
                  "scorable": 1,
                  "comments": null,
                  "created_at": "2018-01-04 10:48:42",
                  "updated_at": "2018-01-04 10:48:46",
                  "deleted_at": null,
                  "context": "Delectus voluptatem.",
                  "question": "Velit rerum similique quia harum nobis enim temporibus magni repellat minus."
                }],
                "answer": "Illo et officia qui."
              }, {
                "id": 678,
                "question_id": 226,
                "action_id": 1,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Commodi ea aut."
              }],
              "legal_bases": [{
                "id": 472,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "legal_basis": "Id velit sunt."
              }],
              "context": "Omnis sit itaque.",
              "question": "Animi quibusdam possimus et voluptatem nemo tempore consectetur id laboriosam illum delectus et voluptas."
            }, {
              "id": 227,
              "questionnaire_type_id": 2,
              "next_question_id": 228,
              "category_id": 10,
              "department_id": 4,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 679,
                "question_id": 227,
                "action_id": 37,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Qui labore sed rem expedita."
              }, {
                "id": 680,
                "question_id": 227,
                "action_id": 41,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Sit quia libero."
              }, {
                "id": 681,
                "question_id": 227,
                "action_id": 33,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Qui nam."
              }],
              "legal_bases": [{
                "id": 473,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "legal_basis": "Aut quaerat pariatur officia."
              }, {
                "id": 474,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "legal_basis": "Quas enim vitae dolores sit tempore."
              }, {
                "id": 475,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "legal_basis": "Maxime voluptas quisquam."
              }],
              "context": "Voluptatem eaque.",
              "question": "Autem pariatur enim est eos non pariatur voluptatum ut molestiae modi iure."
            }, {
              "id": 228,
              "questionnaire_type_id": 2,
              "next_question_id": 229,
              "category_id": 10,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 682,
                "question_id": 228,
                "action_id": 34,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Placeat nobis."
              }, {
                "id": 683,
                "question_id": 228,
                "action_id": 37,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Est quo aut."
              }, {
                "id": 684,
                "question_id": 228,
                "action_id": 21,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Reprehenderit dignissimos perspiciatis."
              }],
              "legal_bases": [],
              "context": "Itaque rem amet.",
              "question": "Maiores quibusdam libero saepe similique non esse rem nesciunt inventore voluptatum doloribus ut maiores."
            }, {
              "id": 229,
              "questionnaire_type_id": 3,
              "next_question_id": 230,
              "category_id": 10,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 685,
                "question_id": 229,
                "action_id": 6,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Eos omnis quia."
              }, {
                "id": 686,
                "question_id": 229,
                "action_id": 5,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Amet incidunt excepturi necessitatibus."
              }, {
                "id": 687,
                "question_id": 229,
                "action_id": 30,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:42",
                "updated_at": "2018-01-04 10:48:42",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Consequatur tenetur molestiae aliquam."
              }],
              "legal_bases": [{
                "id": 476,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Quia odio vel porro ipsa."
              }, {
                "id": 477,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Nisi ratione at soluta cupiditate quae."
              }],
              "context": "Ut nihil non et aut.",
              "question": "Est quo odit rerum itaque rerum sint maxime modi id."
            }, {
              "id": 230,
              "questionnaire_type_id": 2,
              "next_question_id": 231,
              "category_id": 10,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 688,
                "question_id": 230,
                "action_id": 31,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Modi veniam non molestiae."
              }, {
                "id": 689,
                "question_id": 230,
                "action_id": 25,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Animi porro eligendi."
              }, {
                "id": 690,
                "question_id": 230,
                "action_id": 35,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Quia ducimus illum."
              }],
              "legal_bases": [{
                "id": 478,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Nesciunt et quo."
              }, {
                "id": 479,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Provident quia eum voluptatem aut pariatur."
              }, {
                "id": 480,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Suscipit possimus eum."
              }],
              "context": "Rerum itaque.",
              "question": "Doloribus tenetur quasi ut qui quas recusandae enim non qui beatae."
            }, {
              "id": 231,
              "questionnaire_type_id": 2,
              "next_question_id": 232,
              "category_id": 10,
              "department_id": 1,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 691,
                "question_id": 231,
                "action_id": 35,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Voluptas qui maxime est."
              }, {
                "id": 692,
                "question_id": 231,
                "action_id": 44,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Numquam sed ut."
              }, {
                "id": 693,
                "question_id": 231,
                "action_id": 26,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Maiores nostrum eos."
              }],
              "legal_bases": [{
                "id": 481,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Omnis eum exercitationem alias."
              }, {
                "id": 482,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Ea aut voluptatem aut."
              }, {
                "id": 483,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Illum et non aut consequatur dolores."
              }],
              "context": "Delectus voluptatem.",
              "question": "Velit rerum similique quia harum nobis enim temporibus magni repellat minus."
            }, {
              "id": 232,
              "questionnaire_type_id": 3,
              "next_question_id": 233,
              "category_id": 10,
              "department_id": 1,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 694,
                "question_id": 232,
                "action_id": 40,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ullam voluptate inventore."
              }, {
                "id": 695,
                "question_id": 232,
                "action_id": 33,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Consectetur reiciendis saepe unde aut."
              }, {
                "id": 696,
                "question_id": 232,
                "action_id": 42,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Non omnis incidunt."
              }],
              "legal_bases": [{
                "id": 484,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Mollitia sed dolorem aut voluptatem accusamus."
              }, {
                "id": 485,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Voluptatibus ut qui reiciendis voluptas quia."
              }],
              "context": "Sit voluptas.",
              "question": "Sapiente enim sunt laborum velit iste est."
            }, {
              "id": 233,
              "questionnaire_type_id": 3,
              "next_question_id": 234,
              "category_id": 10,
              "department_id": 5,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 697,
                "question_id": 233,
                "action_id": 27,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Accusantium eius ut cupiditate dolor."
              }, {
                "id": 698,
                "question_id": 233,
                "action_id": 29,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et et inventore soluta."
              }, {
                "id": 699,
                "question_id": 233,
                "action_id": 44,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aperiam ut officia."
              }],
              "legal_bases": [],
              "context": "Repellendus non.",
              "question": "Consectetur ab repellendus molestias et necessitatibus consequuntur asperiores dolorum autem pariatur."
            }, {
              "id": 234,
              "questionnaire_type_id": 2,
              "next_question_id": 235,
              "category_id": 10,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 700,
                "question_id": 234,
                "action_id": 38,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Amet commodi in nesciunt."
              }, {
                "id": 701,
                "question_id": 234,
                "action_id": 40,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Praesentium saepe est et."
              }, {
                "id": 702,
                "question_id": 234,
                "action_id": 14,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aut delectus sit molestiae."
              }],
              "legal_bases": [],
              "context": "Qui facere.",
              "question": "Voluptas molestias ut illum dignissimos maxime sed aliquid itaque cupiditate itaque est."
            }, {
              "id": 235,
              "questionnaire_type_id": 1,
              "next_question_id": 236,
              "category_id": 10,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 703,
                "question_id": 235,
                "action_id": 17,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Iusto numquam."
              }, {
                "id": 704,
                "question_id": 235,
                "action_id": 6,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Quo consequatur."
              }, {
                "id": 705,
                "question_id": 235,
                "action_id": 47,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Explicabo ratione tempora."
              }],
              "legal_bases": [{
                "id": 486,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Deleniti dolores nostrum voluptatibus."
              }, {
                "id": 487,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Aliquam eveniet voluptas esse minus."
              }, {
                "id": 488,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Ut consequuntur eum similique."
              }],
              "context": "Ea nesciunt ut.",
              "question": "Delectus iure dolorem ullam doloribus quae et aperiam ab tenetur hic eum voluptatum."
            }, {
              "id": 236,
              "questionnaire_type_id": 3,
              "next_question_id": 237,
              "category_id": 10,
              "department_id": 3,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 706,
                "question_id": 236,
                "action_id": 22,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Natus est architecto."
              }, {
                "id": 707,
                "question_id": 236,
                "action_id": 13,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Accusantium velit delectus."
              }, {
                "id": 708,
                "question_id": 236,
                "action_id": 10,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Non animi rem."
              }],
              "legal_bases": [{
                "id": 489,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Dolorem ratione harum."
              }, {
                "id": 490,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Incidunt non in numquam autem."
              }],
              "context": "Et autem enim enim.",
              "question": "Dolores et voluptas unde aliquam dolorem assumenda est debitis et aut."
            }, {
              "id": 237,
              "questionnaire_type_id": 3,
              "next_question_id": 238,
              "category_id": 10,
              "department_id": 1,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 709,
                "question_id": 237,
                "action_id": 30,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Voluptates nesciunt sed."
              }, {
                "id": 710,
                "question_id": 237,
                "action_id": 44,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aut quia expedita."
              }, {
                "id": 711,
                "question_id": 237,
                "action_id": 6,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Qui eaque."
              }],
              "legal_bases": [{
                "id": 491,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Accusantium aliquid eligendi id rerum sapiente."
              }],
              "context": "Iste dolores optio.",
              "question": "Aut error id magnam repudiandae commodi corporis est autem."
            }, {
              "id": 238,
              "questionnaire_type_id": 3,
              "next_question_id": 239,
              "category_id": 10,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 712,
                "question_id": 238,
                "action_id": 11,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Officia at est ut."
              }, {
                "id": 713,
                "question_id": 238,
                "action_id": 4,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Dolorem provident odio."
              }, {
                "id": 714,
                "question_id": 238,
                "action_id": 7,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ducimus magnam."
              }],
              "legal_bases": [{
                "id": 492,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Ipsa aut maiores qui."
              }],
              "context": "Velit reiciendis.",
              "question": "Omnis neque in id ut consequatur iusto facere dolores quae delectus."
            }, {
              "id": 239,
              "questionnaire_type_id": 1,
              "next_question_id": 240,
              "category_id": 10,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 715,
                "question_id": 239,
                "action_id": 29,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et ea placeat."
              }, {
                "id": 716,
                "question_id": 239,
                "action_id": 45,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Animi accusamus enim accusantium."
              }, {
                "id": 717,
                "question_id": 239,
                "action_id": 45,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nam inventore facilis aut."
              }],
              "legal_bases": [{
                "id": 493,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Rerum ad dicta."
              }, {
                "id": 494,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Modi et facilis."
              }],
              "context": "Deserunt voluptatem.",
              "question": "Est ea minima hic molestiae facilis molestias iusto."
            }, {
              "id": 240,
              "questionnaire_type_id": 2,
              "next_question_id": 241,
              "category_id": 10,
              "department_id": 3,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 718,
                "question_id": 240,
                "action_id": 9,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ab saepe soluta aut."
              }, {
                "id": 719,
                "question_id": 240,
                "action_id": 15,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Voluptate a molestiae ad sint."
              }, {
                "id": 720,
                "question_id": 240,
                "action_id": 37,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Fuga qui laborum."
              }],
              "legal_bases": [{
                "id": 495,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Aut odit assumenda enim."
              }, {
                "id": 496,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Nam eveniet quibusdam qui qui."
              }, {
                "id": 497,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "A molestiae occaecati."
              }],
              "context": "Quaerat minima aut.",
              "question": "Beatae asperiores eius odio rerum quia voluptate explicabo fuga qui optio rerum sint."
            }, {
              "id": 241,
              "questionnaire_type_id": 1,
              "next_question_id": 242,
              "category_id": 10,
              "department_id": 1,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 721,
                "question_id": 241,
                "action_id": 50,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Mollitia assumenda quia ipsum."
              }, {
                "id": 722,
                "question_id": 241,
                "action_id": 23,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nam veniam eligendi."
              }, {
                "id": 723,
                "question_id": 241,
                "action_id": 3,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Laboriosam sed."
              }],
              "legal_bases": [{
                "id": 498,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Totam quibusdam sed eligendi repudiandae nam."
              }, {
                "id": 499,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Sunt officiis aspernatur similique."
              }, {
                "id": 500,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Et accusantium sit."
              }],
              "context": "Debitis quis totam.",
              "question": "Est quia in tempore et et enim et praesentium minus deserunt enim voluptatem esse."
            }, {
              "id": 242,
              "questionnaire_type_id": 2,
              "next_question_id": 243,
              "category_id": 10,
              "department_id": 5,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 724,
                "question_id": 242,
                "action_id": 8,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ex corrupti incidunt autem."
              }, {
                "id": 725,
                "question_id": 242,
                "action_id": 13,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Natus aliquid rem."
              }, {
                "id": 726,
                "question_id": 242,
                "action_id": 49,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nesciunt similique dolore expedita et."
              }],
              "legal_bases": [{
                "id": 501,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Facere qui consequuntur eos recusandae."
              }, {
                "id": 502,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "In a voluptatem."
              }, {
                "id": 503,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Blanditiis at maiores officia."
              }],
              "context": "Nobis reiciendis.",
              "question": "Ad in earum aliquam necessitatibus sit natus facilis id consequatur harum praesentium."
            }, {
              "id": 243,
              "questionnaire_type_id": 3,
              "next_question_id": 244,
              "category_id": 10,
              "department_id": 2,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 727,
                "question_id": 243,
                "action_id": 25,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Dolore inventore."
              }, {
                "id": 728,
                "question_id": 243,
                "action_id": 31,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Quaerat earum nulla nam."
              }, {
                "id": 729,
                "question_id": 243,
                "action_id": 39,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Amet omnis quo."
              }],
              "legal_bases": [{
                "id": 504,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Quo et fugit."
              }, {
                "id": 505,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Dicta dolorum rerum."
              }],
              "context": "Deleniti et quam.",
              "question": "Libero sint beatae dolorem vel adipisci provident eum."
            }, {
              "id": 244,
              "questionnaire_type_id": 2,
              "next_question_id": 245,
              "category_id": 10,
              "department_id": 1,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 730,
                "question_id": 244,
                "action_id": 32,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Dicta qui molestiae."
              }, {
                "id": 731,
                "question_id": 244,
                "action_id": 35,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Quia voluptatem et at."
              }, {
                "id": 732,
                "question_id": 244,
                "action_id": 47,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Magnam ducimus dolorum animi quis."
              }],
              "legal_bases": [],
              "context": "Fugiat sit dicta.",
              "question": "Minima vitae voluptas qui quasi cupiditate eius."
            }, {
              "id": 245,
              "questionnaire_type_id": 1,
              "next_question_id": 246,
              "category_id": 10,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 733,
                "question_id": 245,
                "action_id": 22,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ducimus atque qui."
              }, {
                "id": 734,
                "question_id": 245,
                "action_id": 22,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nisi repellendus nemo et."
              }, {
                "id": 735,
                "question_id": 245,
                "action_id": 9,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Magni dicta ratione id."
              }],
              "legal_bases": [{
                "id": 506,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Deserunt eaque quia fuga hic."
              }, {
                "id": 507,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Rerum quam est repellendus voluptas."
              }, {
                "id": 508,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Fuga dolore aliquam temporibus."
              }],
              "context": "Totam deserunt hic.",
              "question": "Et fugit minus iste ratione tempore est ipsa aut porro sed."
            }, {
              "id": 246,
              "questionnaire_type_id": 2,
              "next_question_id": 247,
              "category_id": 10,
              "department_id": 3,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 736,
                "question_id": 246,
                "action_id": 25,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Porro repellendus officia perferendis."
              }, {
                "id": 737,
                "question_id": 246,
                "action_id": 47,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Odit assumenda porro."
              }, {
                "id": 738,
                "question_id": 246,
                "action_id": 41,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Sunt qui molestiae tenetur."
              }],
              "legal_bases": [{
                "id": 509,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Laborum vero dolor."
              }],
              "context": "Impedit architecto.",
              "question": "Quos rerum qui aut sapiente dignissimos fugit vero fugit."
            }, {
              "id": 247,
              "questionnaire_type_id": 1,
              "next_question_id": 248,
              "category_id": 10,
              "department_id": 1,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 739,
                "question_id": 247,
                "action_id": 42,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Sit sunt qui."
              }, {
                "id": 740,
                "question_id": 247,
                "action_id": 27,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ullam quod mollitia."
              }, {
                "id": 741,
                "question_id": 247,
                "action_id": 20,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Animi ab."
              }],
              "legal_bases": [{
                "id": 510,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Animi dolor assumenda."
              }, {
                "id": 511,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Omnis iusto et optio est ut."
              }],
              "context": "Ut sit et tempora.",
              "question": "Voluptatum nihil nisi blanditiis aperiam voluptatem est alias dolore temporibus dolorem laboriosam."
            }, {
              "id": 248,
              "questionnaire_type_id": 3,
              "next_question_id": 249,
              "category_id": 10,
              "department_id": 2,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 742,
                "question_id": 248,
                "action_id": 25,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Corporis accusamus vel."
              }, {
                "id": 743,
                "question_id": 248,
                "action_id": 24,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Pariatur autem occaecati."
              }, {
                "id": 744,
                "question_id": 248,
                "action_id": 12,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Incidunt incidunt quia."
              }],
              "legal_bases": [{
                "id": 512,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "A ad doloremque."
              }, {
                "id": 513,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Facilis veritatis eos."
              }],
              "context": "Sed aut aut aut.",
              "question": "Quod sunt ut dignissimos autem pariatur aut quia sit hic qui nemo."
            }, {
              "id": 249,
              "questionnaire_type_id": 1,
              "next_question_id": 250,
              "category_id": 10,
              "department_id": 2,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 745,
                "question_id": 249,
                "action_id": 41,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Accusamus ipsa quia vel."
              }, {
                "id": 746,
                "question_id": 249,
                "action_id": 31,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Optio ut praesentium."
              }, {
                "id": 747,
                "question_id": 249,
                "action_id": 20,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Dolores libero eos et."
              }],
              "legal_bases": [{
                "id": 514,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Vitae eum explicabo assumenda quidem."
              }, {
                "id": 515,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Velit quos consequatur et placeat."
              }],
              "context": "Repellendus ea.",
              "question": "Consequatur omnis rerum et et expedita earum debitis culpa sit harum cupiditate ipsam delectus."
            }, {
              "id": 250,
              "questionnaire_type_id": 1,
              "next_question_id": 251,
              "category_id": 10,
              "department_id": 4,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:42",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 748,
                "question_id": 250,
                "action_id": 42,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Earum vel culpa corporis."
              }, {
                "id": 749,
                "question_id": 250,
                "action_id": 25,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Necessitatibus voluptatem dolore vel."
              }, {
                "id": 750,
                "question_id": 250,
                "action_id": 42,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Debitis eum laborum veniam."
              }],
              "legal_bases": [{
                "id": 516,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Nam enim quo rerum culpa."
              }, {
                "id": 517,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Incidunt omnis porro accusamus."
              }],
              "context": "Molestiae et.",
              "question": "Architecto dolor assumenda occaecati similique at facilis dignissimos."
            }],
            "name": "Lorem ipsum"
          }, {
            "id": 11,
            "category_id": 1,
            "created_at": "2018-01-04 10:48:35",
            "updated_at": "2018-01-04 10:48:35",
            "deleted_at": null,
            "questions": [{
              "id": 251,
              "questionnaire_type_id": 2,
              "next_question_id": 252,
              "category_id": 11,
              "department_id": 5,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 751,
                "question_id": 251,
                "action_id": 39,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nemo expedita id ullam."
              }, {
                "id": 752,
                "question_id": 251,
                "action_id": 20,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et quidem modi."
              }, {
                "id": 753,
                "question_id": 251,
                "action_id": 10,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Voluptatibus maiores voluptatem sed."
              }],
              "legal_bases": [],
              "context": "Est fuga dicta.",
              "question": "Aperiam quas mollitia quia sed fuga molestias."
            }, {
              "id": 252,
              "questionnaire_type_id": 3,
              "next_question_id": 253,
              "category_id": 11,
              "department_id": 2,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 754,
                "question_id": 252,
                "action_id": 24,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Tenetur qui voluptatem."
              }, {
                "id": 755,
                "question_id": 252,
                "action_id": 33,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Molestiae sed numquam iure commodi."
              }, {
                "id": 756,
                "question_id": 252,
                "action_id": 50,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Commodi dignissimos non."
              }],
              "legal_bases": [{
                "id": 518,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Et itaque minus voluptates maiores excepturi."
              }, {
                "id": 519,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Animi culpa tempore ut."
              }, {
                "id": 520,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Recusandae fugit soluta dolorem id quia."
              }],
              "context": "Perspiciatis neque.",
              "question": "In rerum accusamus esse eum ex nemo perferendis velit beatae eos unde."
            }, {
              "id": 253,
              "questionnaire_type_id": 2,
              "next_question_id": 254,
              "category_id": 11,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 757,
                "question_id": 253,
                "action_id": 44,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Neque ratione voluptas."
              }, {
                "id": 758,
                "question_id": 253,
                "action_id": 47,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Eos eius velit modi."
              }, {
                "id": 759,
                "question_id": 253,
                "action_id": 1,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aut ratione dignissimos quisquam."
              }],
              "legal_bases": [{
                "id": 521,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Alias suscipit et."
              }, {
                "id": 522,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Dicta accusamus amet reprehenderit."
              }, {
                "id": 523,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Quibusdam et quia autem et."
              }],
              "context": "Doloremque iure.",
              "question": "Fugiat occaecati molestiae magnam harum sequi asperiores."
            }, {
              "id": 254,
              "questionnaire_type_id": 2,
              "next_question_id": 255,
              "category_id": 11,
              "department_id": 4,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 760,
                "question_id": 254,
                "action_id": 21,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Qui eum fugiat."
              }, {
                "id": 761,
                "question_id": 254,
                "action_id": 45,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Id consequatur est alias."
              }, {
                "id": 762,
                "question_id": 254,
                "action_id": 48,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aspernatur ex ut in."
              }],
              "legal_bases": [{
                "id": 524,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Culpa labore laborum quidem."
              }, {
                "id": 525,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Porro repellendus ut in."
              }],
              "context": "A eos neque vel.",
              "question": "Dolorum libero neque velit quos fugit laborum id quidem."
            }, {
              "id": 255,
              "questionnaire_type_id": 2,
              "next_question_id": 256,
              "category_id": 11,
              "department_id": 2,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 763,
                "question_id": 255,
                "action_id": 42,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Ipsum nisi."
              }, {
                "id": 764,
                "question_id": 255,
                "action_id": 50,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nisi enim consequatur suscipit."
              }, {
                "id": 765,
                "question_id": 255,
                "action_id": 11,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Rem non."
              }],
              "legal_bases": [{
                "id": 526,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Tempora accusantium quibusdam eligendi."
              }, {
                "id": 527,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Et voluptates et."
              }, {
                "id": 528,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Neque dolor molestias qui minus iste."
              }],
              "context": "Sint dolore.",
              "question": "Repellat minus fugiat eius fugit aut excepturi."
            }, {
              "id": 256,
              "questionnaire_type_id": 3,
              "next_question_id": 257,
              "category_id": 11,
              "department_id": 1,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 766,
                "question_id": 256,
                "action_id": 50,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Adipisci est maxime."
              }, {
                "id": 767,
                "question_id": 256,
                "action_id": 3,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Dolores culpa minus."
              }, {
                "id": 768,
                "question_id": 256,
                "action_id": 14,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Vitae perspiciatis qui autem."
              }],
              "legal_bases": [{
                "id": 529,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Qui aut aut."
              }, {
                "id": 530,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Illum doloribus vero quisquam."
              }, {
                "id": 531,
                "created_at": "2018-01-04 10:48:43",
                "updated_at": "2018-01-04 10:48:43",
                "deleted_at": null,
                "legal_basis": "Eaque veritatis adipisci perspiciatis aut."
              }],
              "context": "Quas deserunt.",
              "question": "Ab et impedit aut commodi minus voluptatem et."
            }, {
              "id": 257,
              "questionnaire_type_id": 1,
              "next_question_id": 258,
              "category_id": 11,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 769,
                "question_id": 257,
                "action_id": 14,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Id ipsa sapiente quidem."
              }, {
                "id": 770,
                "question_id": 257,
                "action_id": 41,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Deleniti rerum aperiam incidunt."
              }, {
                "id": 771,
                "question_id": 257,
                "action_id": 41,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Earum accusamus quia."
              }],
              "legal_bases": [{
                "id": 532,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Consequatur quisquam dolores esse."
              }],
              "context": "Nemo et tenetur.",
              "question": "Accusantium quae velit quasi iste natus voluptatibus explicabo cumque ab dolorum fuga eos magni."
            }, {
              "id": 258,
              "questionnaire_type_id": 3,
              "next_question_id": 259,
              "category_id": 11,
              "department_id": 2,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 772,
                "question_id": 258,
                "action_id": 11,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Quibusdam iusto."
              }, {
                "id": 773,
                "question_id": 258,
                "action_id": 38,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Est cumque molestias vel."
              }, {
                "id": 774,
                "question_id": 258,
                "action_id": 47,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Qui voluptates debitis."
              }],
              "legal_bases": [{
                "id": 533,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Qui officiis mollitia."
              }],
              "context": "Quam libero rem.",
              "question": "Neque in quo non non porro reprehenderit perferendis nam quia eveniet."
            }, {
              "id": 259,
              "questionnaire_type_id": 2,
              "next_question_id": 260,
              "category_id": 11,
              "department_id": 2,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 775,
                "question_id": 259,
                "action_id": 39,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Velit vel ut natus."
              }, {
                "id": 776,
                "question_id": 259,
                "action_id": 11,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Consectetur rem eligendi illo."
              }, {
                "id": 777,
                "question_id": 259,
                "action_id": 32,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Autem expedita."
              }],
              "legal_bases": [{
                "id": 534,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Velit consectetur blanditiis."
              }, {
                "id": 535,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Sint rerum deserunt expedita explicabo perferendis."
              }, {
                "id": 536,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Aspernatur veniam in in eos."
              }],
              "context": "Officiis nihil ab.",
              "question": "Quaerat molestias iure voluptatem dolor saepe voluptatem culpa explicabo eius eum accusamus."
            }, {
              "id": 260,
              "questionnaire_type_id": 1,
              "next_question_id": 261,
              "category_id": 11,
              "department_id": 4,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 778,
                "question_id": 260,
                "action_id": 47,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Praesentium est dolorum et."
              }, {
                "id": 779,
                "question_id": 260,
                "action_id": 9,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Eos dolores officiis."
              }, {
                "id": 780,
                "question_id": 260,
                "action_id": 32,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Eligendi quam dolorem."
              }],
              "legal_bases": [{
                "id": 537,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Laudantium fugiat in tenetur."
              }],
              "context": "Tenetur praesentium.",
              "question": "Rem quia nihil laborum numquam corrupti non fugit ut."
            }, {
              "id": 261,
              "questionnaire_type_id": 2,
              "next_question_id": 262,
              "category_id": 11,
              "department_id": 4,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 781,
                "question_id": 261,
                "action_id": 33,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et laborum."
              }, {
                "id": 782,
                "question_id": 261,
                "action_id": 3,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Iure consectetur optio."
              }, {
                "id": 783,
                "question_id": 261,
                "action_id": 30,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Recusandae et nemo et quis."
              }],
              "legal_bases": [{
                "id": 538,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Repellat est quia."
              }],
              "context": "Vel cupiditate quo.",
              "question": "Commodi fugit esse ea fugiat eum necessitatibus quae natus aliquam ipsa eum quod ut beatae."
            }, {
              "id": 262,
              "questionnaire_type_id": 1,
              "next_question_id": 263,
              "category_id": 11,
              "department_id": 2,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 784,
                "question_id": 262,
                "action_id": 30,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nulla corrupti quisquam nihil corrupti."
              }, {
                "id": 785,
                "question_id": 262,
                "action_id": 15,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et voluptatem laboriosam."
              }, {
                "id": 786,
                "question_id": 262,
                "action_id": 30,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Tempora eos officiis."
              }],
              "legal_bases": [{
                "id": 539,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Soluta laboriosam autem aut."
              }, {
                "id": 540,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Sint repellat optio enim."
              }, {
                "id": 541,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Vero quia quos non."
              }],
              "context": "Id voluptatum harum.",
              "question": "Qui nam illum quidem exercitationem placeat ratione necessitatibus sed quasi animi ipsa."
            }, {
              "id": 263,
              "questionnaire_type_id": 3,
              "next_question_id": 264,
              "category_id": 11,
              "department_id": 2,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 787,
                "question_id": 263,
                "action_id": 8,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Culpa quos sint error."
              }, {
                "id": 788,
                "question_id": 263,
                "action_id": 33,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et facilis optio natus."
              }, {
                "id": 789,
                "question_id": 263,
                "action_id": 48,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Illum tenetur nemo."
              }],
              "legal_bases": [{
                "id": 542,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Adipisci odit et rem et saepe."
              }, {
                "id": 543,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Harum ab adipisci ullam et."
              }, {
                "id": 544,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Veritatis vitae ut."
              }],
              "context": "Tempora fuga et.",
              "question": "Libero sed incidunt facere veniam doloremque alias sunt."
            }, {
              "id": 264,
              "questionnaire_type_id": 3,
              "next_question_id": 265,
              "category_id": 11,
              "department_id": 1,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 790,
                "question_id": 264,
                "action_id": 9,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Omnis ipsam sapiente."
              }, {
                "id": 791,
                "question_id": 264,
                "action_id": 5,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Qui id id."
              }, {
                "id": 792,
                "question_id": 264,
                "action_id": 12,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Est architecto tenetur aut."
              }],
              "legal_bases": [{
                "id": 545,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Quo architecto doloribus magnam."
              }, {
                "id": 546,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Voluptas dignissimos repellat ut quod."
              }],
              "context": "Dolore velit et.",
              "question": "Et et eum ea a asperiores sunt ut aut ad."
            }, {
              "id": 265,
              "questionnaire_type_id": 1,
              "next_question_id": 266,
              "category_id": 11,
              "department_id": 1,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 793,
                "question_id": 265,
                "action_id": 9,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Non voluptatem voluptates."
              }, {
                "id": 794,
                "question_id": 265,
                "action_id": 47,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aut incidunt aut."
              }, {
                "id": 795,
                "question_id": 265,
                "action_id": 21,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Vero et voluptatem."
              }],
              "legal_bases": [{
                "id": 547,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Ratione pariatur sapiente est eaque."
              }],
              "context": "Consequatur sit.",
              "question": "Enim porro eum libero ut consequatur est."
            }, {
              "id": 266,
              "questionnaire_type_id": 1,
              "next_question_id": 267,
              "category_id": 11,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 796,
                "question_id": 266,
                "action_id": 30,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Maiores modi consequatur in."
              }, {
                "id": 797,
                "question_id": 266,
                "action_id": 48,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Magnam aliquid quia."
              }, {
                "id": 798,
                "question_id": 266,
                "action_id": 13,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Eaque eos eum et."
              }],
              "legal_bases": [{
                "id": 548,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Praesentium consequatur explicabo."
              }],
              "context": "Necessitatibus aut.",
              "question": "Molestiae et minus amet voluptatem aut praesentium provident voluptas temporibus ullam laboriosam voluptas."
            }, {
              "id": 267,
              "questionnaire_type_id": 2,
              "next_question_id": 268,
              "category_id": 11,
              "department_id": 5,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 799,
                "question_id": 267,
                "action_id": 40,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Pariatur occaecati itaque."
              }, {
                "id": 800,
                "question_id": 267,
                "action_id": 43,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Commodi ut nesciunt tempora."
              }, {
                "id": 801,
                "question_id": 267,
                "action_id": 37,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Est et repudiandae dolorum."
              }],
              "legal_bases": [{
                "id": 549,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Quisquam voluptatem enim recusandae."
              }],
              "context": "Quo unde facilis.",
              "question": "Dolores voluptatem qui optio quibusdam maxime quia cupiditate voluptatum amet aut."
            }, {
              "id": 268,
              "questionnaire_type_id": 1,
              "next_question_id": 269,
              "category_id": 11,
              "department_id": 5,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 802,
                "question_id": 268,
                "action_id": 24,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Incidunt at similique."
              }, {
                "id": 803,
                "question_id": 268,
                "action_id": 2,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Et molestiae voluptas."
              }, {
                "id": 804,
                "question_id": 268,
                "action_id": 17,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Cupiditate reprehenderit dolores."
              }],
              "legal_bases": [],
              "context": "Eligendi officiis.",
              "question": "Vel omnis et aut veniam quibusdam repudiandae sed architecto unde voluptatem sequi nesciunt."
            }, {
              "id": 269,
              "questionnaire_type_id": 3,
              "next_question_id": 270,
              "category_id": 11,
              "department_id": 1,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 805,
                "question_id": 269,
                "action_id": 14,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Facere voluptatem ut."
              }, {
                "id": 806,
                "question_id": 269,
                "action_id": 23,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aut dolor nostrum accusamus."
              }, {
                "id": 807,
                "question_id": 269,
                "action_id": 17,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Debitis earum voluptatem."
              }],
              "legal_bases": [],
              "context": "Omnis libero esse.",
              "question": "Est voluptatem asperiores voluptatem praesentium corporis voluptas rerum doloremque aut amet."
            }, {
              "id": 270,
              "questionnaire_type_id": 1,
              "next_question_id": 271,
              "category_id": 11,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 808,
                "question_id": 270,
                "action_id": 6,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Dignissimos quo voluptates."
              }, {
                "id": 809,
                "question_id": 270,
                "action_id": 43,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Repudiandae eos quas."
              }, {
                "id": 810,
                "question_id": 270,
                "action_id": 19,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Est id vel in."
              }],
              "legal_bases": [{
                "id": 550,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Eius rerum asperiores eligendi et."
              }, {
                "id": 551,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Tempora quia pariatur inventore."
              }, {
                "id": 552,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Architecto ut quae et tempore temporibus."
              }],
              "context": "Corporis aut.",
              "question": "Est aut suscipit natus sint quibusdam quis ab ut at quisquam repudiandae eos."
            }, {
              "id": 271,
              "questionnaire_type_id": 1,
              "next_question_id": 272,
              "category_id": 11,
              "department_id": 1,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 811,
                "question_id": 271,
                "action_id": 38,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aut cupiditate beatae."
              }, {
                "id": 812,
                "question_id": 271,
                "action_id": 12,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Excepturi perferendis provident."
              }, {
                "id": 813,
                "question_id": 271,
                "action_id": 2,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Sit reiciendis voluptates."
              }],
              "legal_bases": [{
                "id": 553,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Perferendis sequi reiciendis dolore dolorem eos."
              }],
              "context": "Officia eligendi.",
              "question": "Ab delectus quasi saepe maxime eaque iure."
            }, {
              "id": 272,
              "questionnaire_type_id": 2,
              "next_question_id": 273,
              "category_id": 11,
              "department_id": 2,
              "scorable": 0,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 814,
                "question_id": 272,
                "action_id": 40,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Aliquam aliquid mollitia quaerat."
              }, {
                "id": 815,
                "question_id": 272,
                "action_id": 41,
                "compliance": 100,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Nihil aut dignissimos."
              }, {
                "id": 816,
                "question_id": 272,
                "action_id": 1,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Perferendis molestias repudiandae est."
              }],
              "legal_bases": [],
              "context": "Recusandae et rerum.",
              "question": "Quia et est ullam minus explicabo dolor perspiciatis enim earum."
            }, {
              "id": 273,
              "questionnaire_type_id": 2,
              "next_question_id": 274,
              "category_id": 11,
              "department_id": 5,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 817,
                "question_id": 273,
                "action_id": 8,
                "compliance": 0,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Cum minima aut autem."
              }, {
                "id": 818,
                "question_id": 273,
                "action_id": 4,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Cum ullam enim dignissimos."
              }, {
                "id": 819,
                "question_id": 273,
                "action_id": 7,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Similique cumque voluptas."
              }],
              "legal_bases": [{
                "id": 554,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Eius illo molestiae sed."
              }, {
                "id": 555,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Enim atque quia alias quia vero."
              }, {
                "id": 556,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Aut itaque quasi et."
              }],
              "context": "Sunt non dolores.",
              "question": "Nulla vel ad temporibus id aut odio velit occaecati sunt eos."
            }, {
              "id": 274,
              "questionnaire_type_id": 1,
              "next_question_id": 275,
              "category_id": 11,
              "department_id": 2,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 820,
                "question_id": 274,
                "action_id": 21,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Hic cum aliquid."
              }, {
                "id": 821,
                "question_id": 274,
                "action_id": 24,
                "compliance": 50,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Illum dolorem velit nulla."
              }, {
                "id": 822,
                "question_id": 274,
                "action_id": 47,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Vel nemo qui."
              }],
              "legal_bases": [{
                "id": 557,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Sit minus ea voluptas in."
              }, {
                "id": 558,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Quia at asperiores qui."
              }, {
                "id": 559,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Dolores ut nobis eos quis."
              }],
              "context": "Rem praesentium id.",
              "question": "Laudantium aut nesciunt pariatur harum eligendi ipsam quam est amet."
            }, {
              "id": 275,
              "questionnaire_type_id": 2,
              "next_question_id": 276,
              "category_id": 11,
              "department_id": 3,
              "scorable": 1,
              "comments": null,
              "created_at": "2018-01-04 10:48:43",
              "updated_at": "2018-01-04 10:48:46",
              "deleted_at": null,
              "answers": [{
                "id": 823,
                "question_id": 275,
                "action_id": 29,
                "compliance": 25,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Facere deleniti sequi ratione."
              }, {
                "id": 824,
                "question_id": 275,
                "action_id": 4,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Officiis consequatur voluptas sint."
              }, {
                "id": 825,
                "question_id": 275,
                "action_id": 17,
                "compliance": 75,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "eliminates_questions": [],
                "answer": "Repellat ut nobis."
              }],
              "legal_bases": [{
                "id": 560,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Rerum quidem et."
              }, {
                "id": 561,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Animi aut voluptates."
              }, {
                "id": 562,
                "created_at": "2018-01-04 10:48:44",
                "updated_at": "2018-01-04 10:48:44",
                "deleted_at": null,
                "legal_basis": "Doloremque dolore sed omnis."
              }],
              "context": "Est itaque iure.",
              "question": "Quas quod pariatur qui voluptatum eius cupiditate."
            }],
            "name": "Subcategory hello my friend"
          }],
          "name": "My data"
    }


    // Merge first category content
    Object.assign(this.categories[0], dataToMerge);
  }


  public buildLinkWithAnchor(anchor: string): string {

    console.log('#' + new SlugifyPipe().transform(anchor));
    return '#' + new SlugifyPipe().transform(anchor);
  }

}
