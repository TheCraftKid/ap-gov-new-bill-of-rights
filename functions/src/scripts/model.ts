/**
 * Supplementary information for a new amendment to the Constitution.
 */
export interface AmendmentExplanation {

  /**
   * A globally unique identifier for this explanation.
   */
  readonly id: string;

  /**
   * General information supporting the claim that this amendment to the
   * Constitution is needed.
   */
  readonly infoText: string;

  /**
   * An article that supports the claim that this amendment is needed.
   */
  readonly article?: Article;

  /**
   * An optional URL used to display a background during the presentation. 
   */
  readonly backgroundImage?: string;
}

/**
 * A supplemental article that helps explain why an amendment is needed.
 */
export interface Article {

  /**
   * The URL of this article.
   */
  readonly link: string;

  /**
   * The name of the publication/source that provided `link`.
   */
  readonly source: string;
}

/**
 * A new amendment to the United States Constitution
 */
export interface Amendment {

  /**
   * A globally unique identifier for this amendment.
   */
  readonly id: string;

  /**
   * The full plain text of this amendment, something in the vein of "Congress
   * shall make no law..."
   */
  readonly rawText: string;

  /**
   * A shortened version of the amendment fit for a title, like "Freedom of X."
   */
  readonly abridgedText: string;

  /**
   * Layman-understandable explanation that tries to persuade the audience of
   * the necessity of this amendment.
   */
  readonly reasoning: string;

  /**
   * A list of explanations used to justify this amendment's existence.
   * There will always be at least one explanation in this list.
   */
  readonly explanations: AmendmentExplanation[];
}