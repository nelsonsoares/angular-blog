import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLinkWithHref, NgOptimizedImage],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  contentPhoto: string =
    'https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mulher de cabeça baixa sobre notebook';
  contentPhotoAlt: string = 'Mulher de cabeça baixa sobre notebook';
  contentTitle: string =
    'Por que algumas pessoas se sentem cansadas o tempo todo?';
  contentSubTitle: string =
    'Para algumas pessoas, não importa quanto tempo durmam, elas ainda se sentem cansadas e com pouca energia. Por quê?';
  contentTextContent: string = `O cansaço é uma queixa "muito, muito comum" entre os pacientes da médica da família Rosalind Adam, que trabalha em Aberdeen, no Reino Unido, há mais de uma década.A condição é tão comum que o Serviço Nacional de Saúde do Reino Unido tem sua própria sigla para ela: TATT ("Tired All The Time", ou "cansado o tempo todo", em português).Mas, apesar da sua onipresença, a compreensão dos cientistas sobre a fadiga (incluindo suas causas, como ela altera o nosso corpo e o cérebro e sua melhor forma de tratamento) é incrivelmente limitada. Até a sua definição é complicada.O cansaço é diferente do sono, que é "mais uma propensão a adormecer", explica Adam.
      "É uma espécie de conceito geral da sensação de cansaço", afirma o professor de administração e comportamento organizacional Christopher Barnes, da Universidade de Washington em Seattle, nos Estados Unidos.Ele estuda como a falta de sono afeta o ambiente de trabalho.`;
}
